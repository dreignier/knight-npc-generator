import { ALLIE, ARMORED, ASPECTS_LABELS, BANDE, BETE, CHAIR, COLOSSE, COURTE, DAME, GRID, HEROS, HOSTILE, INITIE, LOINTAINE, LONGUE, MACHINE, MASQUE, MOYENNE, ORGANIC, PATRON, PATRON_COLOSSE, RECRUE, ROBOT, SALOPARD } from '../constants';
import { isString } from '../util';
import Aspect from './Aspect';
import Capacity, { capacities } from './Capacity';
import Effect, { effects } from './Effect';
import Weapon from './Weapon';

function shuffle(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export const colors = [
  '#f25a1e', // Bête
  '#9b1a25', // Chair
  '#556abc', // Machine
  '#69bfdc', // Dame
  '#70aa6c', // Masque
  '#d3181f', // Ennemi
  '#364379', // Homme en noir
  '#cacd40', // Arbitre
  '#321619', // Horreur
  '#363d42', // Ophidien
  '#ab1d94', // Autre
  '#40bd97', // Allié
];

export class GenerateOptions {
  power: number = 50;
  balances: number[] = [5, 5, 5, 5, 5];
  type: string = HOSTILE;
  level: string = RECRUE;
  subtype: string = ORGANIC;
  forcefield: boolean = false;
  resilience: boolean = false;
  energy: boolean = false;

  ratio(min: number, max: number) {
    return Math.round(min + (max - min) * (this.power * 0.01));
  }

  candidates(how: number) {
    return [0, 1, 2, 3, 4].sort((a, b) => this.balances[b] - this.balances[a]).slice(0, how);
  }
}

export class Npc {
  name: string = '';
  type: string = HOSTILE;
  level: string = RECRUE;
  aspects: Aspect[] = [new Aspect(), new Aspect(), new Aspect(), new Aspect(), new Aspect()];
  health: number = 0;
  armor: number = 0;
  energy: number = 0;
  shield: number = 0;
  forcefield: number = 0;
  defense: number = 0;
  reaction: number = 0;
  initiative: number = 0;
  outbreak: number = 0;
  weakness: string = '';
  capacities: Capacity[] = [];
  weapons: Weapon[] = [];
  resilience: number = 0;
  color: string = '#d3181f';

  constructor(base?: Npc) {
    if (base) {
      this.copy(base);
    } else {
      this.initializeAspects();
    }
  }

  initializeAspects() {
    for (let i = 0; i < 5; ++i) {
      if (!this.aspects[i]) {
        this.aspects[i] = new Aspect();
      }

      this.aspects[i].id = i;
      this.aspects[i].name = ASPECTS_LABELS[i];
    }
  }

  copy(npc: Npc) {
    this.name = isString(npc.name) ? npc.name : '';
    this.type = [HOSTILE, SALOPARD, COLOSSE, PATRON, PATRON_COLOSSE, BANDE, ALLIE].includes(npc.type?.toLowerCase?.()) ? npc.type.toLowerCase() : HOSTILE;
    this.level = [RECRUE, INITIE, HEROS].includes(npc.level?.toLowerCase?.()) ? npc.level.toLowerCase() : RECRUE;
    this.aspects = (Array.isArray(npc.aspects) ? npc.aspects : []).map(a => new Aspect(a));
    this.health = Number.isFinite(npc.health) ? npc.health : 0;
    this.armor = Number.isFinite(npc.armor) ? npc.armor : 0;
    this.energy = Number.isFinite(npc.energy) ? npc.energy : 0;
    this.shield = Number.isFinite(npc.shield) ? npc.shield : 0;
    this.forcefield = Number.isFinite(npc.forcefield) ? npc.forcefield : 0;
    this.defense = Number.isFinite(npc.defense) ? npc.defense : 0;
    this.reaction = Number.isFinite(npc.reaction) ? npc.reaction : 0;
    this.initiative = Number.isFinite(npc.initiative) ? npc.initiative : 0;
    this.outbreak = Number.isFinite(npc.outbreak) ? npc.outbreak : 0;
    this.weakness = isString(npc.weakness) ? npc.weakness : '';
    this.capacities = (Array.isArray(npc.capacities) ? npc.capacities : []).map(c => new Capacity(c));
    this.weapons = (Array.isArray(npc.weapons) ? npc.weapons : []).map(w => new Weapon(w));
    this.resilience = Number.isFinite(npc.resilience) ? npc.resilience : 0;
    this.color = (isString(npc.color) && /\#[0-9a-f]{6}/i.test(npc.color)) ? npc.color : '#d3181f';

    this.initializeAspects();
  }

  generate(options: GenerateOptions) {
    this.copy(new Npc());

    this.type = options.type;
    this.level = options.level;

    const total = options.balances.reduce((previous, current) => current + previous, 0);
    const infos = grid(this.type, this.level);

    if (this.type === ALLIE) {
      this.color = '#40bd97';
    } else {
      const max = Math.max(...options.balances);
      if (options.balances.filter(a => a === max).length === 1) {
        const best = options.candidates(1)[0];

        if (best === CHAIR) {
          this.color = '#9b1a25';
        } else if (best === BETE) {
          this.color = '#f25a1e';
        } else if (best === MACHINE) {
          this.color = '#556abc';
        } else if (best === DAME) {
          this.color = '#69bfdc';
        } else if (best === MASQUE) {
          this.color = '#70aa6c';
        }
      }
    }

    // Aspects
    const aspects = options.ratio(infos.aspects.min, infos.aspects.max);
    for (let i = 0; i < 5; ++i) {
      this.aspects[i].score = Math.max(1, Math.round(aspects * (options.balances[i] / total)));
    }

    let changed: boolean;
    do {
      changed = false;

      for (let i = 0; i < 5; ++i) {
        if (this.aspects[i].score > infos.aspects.limit) {
          const min = this.aspects.map(a => a.score).reduce((previous, current) => current < previous ? current : previous, Infinity);

          this.aspects.find(a => a.score === min)!.score += 1;
          this.aspects[i].score -= 1;

          changed = true;
        }
      }
    } while (changed);

    // Exceptional
    let exceptionals = options.ratio(infos.aspects_exceptionals.min, infos.aspects_exceptionals.max);
    for (const aspect of options.candidates(5)) {
      this.aspects[aspect].exceptional = Math.min(infos.aspects_exceptionals.limit, exceptionals);
      exceptionals -= this.aspects[aspect].exceptional;

      if (exceptionals <= 0) {
        break;
      }
    }

    // Major exceptional
    const majors = options.ratio(infos.aspects_exceptionals.major_min, infos.aspects_exceptionals.major_max);
    for (const aspect of options.candidates(majors)) {
      this.aspects[aspect].major = true;
    }

    // Others
    if (options.forcefield) {
      this.forcefield = options.ratio(infos.forcefield.min, infos.forcefield.max);
    } else if (this.type !== ALLIE) {
      this.shield = options.ratio(infos.shield.min, infos.shield.max);
    }

    if (options.type === BANDE) {
      this.health = options.ratio(infos.health.min, infos.health.max);
      this.outbreak = options.ratio(infos.outbreak.min, infos.outbreak.max);
    } else {
      if (options.subtype === ORGANIC) {
        this.health =  options.ratio(infos.health.min, infos.health.max);
      } else if (options.subtype === ROBOT) {
        this.armor = options.ratio(infos.health.min, infos.health.max);
      } else if (options.subtype === ARMORED) {
        this.health =  options.ratio(infos.health.min, infos.health.max);
        this.armor = options.ratio(infos.armor.min, infos.armor.max);
      }

      if (options.energy) {
        this.energy = options.ratio(infos.energy.min, infos.energy.max);
      }

      if (options.resilience) {
        this.resilience = Math.floor((this.health || this.armor) * infos.resilience);
      }
    }

    // Round
    this.health = Math.round(this.health / 10) * 10;
    this.armor = Math.round(this.armor / 10) * 10;
    this.energy = Math.round(this.energy / 10) * 10;
    this.resilience = Math.round(this.resilience / 10) * 10;

    this.recompute();

    let filteredCapacities = this.query(capacities);
    const weaknesses = [];

    // Capacities
    let counter = 0;
    const capacitiesTotal = ((this.type === COLOSSE || this.type === PATRON_COLOSSE) && this.resilience) ? infos.capacities + 1 : infos.capacities;
    for (const capacity of filteredCapacities) {
      if (this.hasCapacity(capacity)) {
        continue;
      }

      this.capacities.push(new Capacity(capacity));

      if (capacity.tags.includes('faiblesse (recrue)')) {
        weaknesses.push(RECRUE);
      } else if (capacity.tags.includes('faiblesse (initié)')) {
        weaknesses.push(INITIE);
      } else if (capacity.tags.includes('faiblesse (héros)')) {
        weaknesses.push(HEROS);
      }

      counter += 1;
      if (counter === capacitiesTotal) {
        break;
      }
    }

    for (const level of weaknesses) {
      filteredCapacities = this.query(capacities, { level, filterWeakness: true });

      for (const capacity of filteredCapacities) {
        if (this.hasCapacity(capacity)) {
          continue;
        }

        this.capacities.push(new Capacity(capacity));

        break;
      }
    }

    if (this.type === BANDE) {
      filteredCapacities = this.query(capacities, { filterWeakness: true, effect: true });

      counter = 0;
      for (const capacity of filteredCapacities) {
        if (this.hasCapacity(capacity)) {
          continue;
        }

        this.capacities.push(new Capacity(capacity));

        counter += 1;
        if (counter === options.ratio(infos.outbreak.effects_min, infos.outbreak.effects_max)) {
          break;
        }
      }
    } else {
      for (let i = 0; i < 2; ++i) {
        const weapon = new Weapon();
        weapon.name = 'Arme ' + (i + 1);
        weapon.dices = 2;

        let points = infos.weapon.points;

        if (i !== 0) {
          weapon.contact = false;
          const ranges = [COURTE, MOYENNE, LONGUE, LOINTAINE];
          shuffle(ranges);
          weapon.range = ranges[0];

          if (weapon.range === MOYENNE) {
            points -= 5;
          } else if (weapon.range === LONGUE) {
            points -= 10;
          } else if (weapon.range === LOINTAINE) {
            points -= 15;
          }
        }

        const filteredEffects = this.query(effects);

        for (let i = 0; i < infos.weapon.effect; ++i) {
          const effect = filteredEffects[i];

          if (!effect || points < effect.cost) {
            continue;
          }

          weapon.effects.push(new Effect(effect));

          points -= effect.cost;

          if (points <= 0) {
            break;
          }
        }

        weapon.effects.sort((a, b) => a.name.localeCompare(b.name));

        // Upgrade dices until 10d6
        while (points >= 10 && weapon.dices < 10) {
          weapon.dices += 1;
          points -= 10;
        }

        // Upgrade dices
        while (points >= 20) {
          weapon.dices += 1;
          points -= 20;
        }

        if (weapon.contact) {
          if (this.aspects[BETE].exceptional) {
            weapon.raw += this.aspects[BETE].exceptional;

            if (this.aspects[BETE].major) {
              weapon.raw += this.aspects[BETE].score;
            }
          }
        }

        this.weapons.push(weapon);
      }
    }

    this.capacities.sort((a, b) => a.name.localeCompare(b.name));
  }

  clean<T extends { tags: string[], raw: (() => string) }>(elements: T[]) {
    const set = new Set<string>();

    return elements.filter(e => {
      const raw = e.raw();

      if (set.has(raw)) {
        return false;
      }

      // Specific cases
      for (const exclusions of ['Ignore Armure - Ignore CdF - Pénétrant - Perce armure', 'Choc - Parasitage', 'Ignore armure - Destructeur']) {
        if (exclusions.includes(raw) && exclusions.split(' - ').some(tag => set.has(tag))) {
          return false;
        }
      }

      set.add(raw);

      return true;
    });
  }

  hasCapacity(capacity: Capacity) {
    return this.capacities.map(c => c.raw()).some(c => c === capacity.raw());
  }

  elite() {
    const info = grid(this.type, this.level);

    this.name += ' (élite)';

    const sortedAspects = [...this.aspects].sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }

      if ((a.exceptional > 0) !== (b.exceptional > 0)) {
        return a.exceptional ? -1 : +1;
      }

      if (a.major !== b.major) {
        return a.major ? -1 : +1;
      }

      return b.exceptional - a.exceptional;
    });

    for (const aspect of sortedAspects) {
      if ((aspect.score !== sortedAspects[0].score) || (aspect.major !== sortedAspects[0].major) || (aspect.exceptional !== sortedAspects[0].exceptional)) {
        break;
      }

      this.boost(aspect);
    }

    this.health = Math.floor(this.health * 1.5);
    this.armor = Math.floor(this.armor * 1.5);
    this.energy = Math.floor(this.energy * 1.5);
    this.forcefield = Math.floor(this.forcefield * 1.5);
    this.outbreak = Math.floor(this.outbreak * 1.5);
    this.resilience = Math.floor(this.resilience * 1.5);

    this.health = Math.round(this.health / 10) * 10;
    this.armor = Math.round(this.armor / 10) * 10;
    this.energy = Math.round(this.energy / 10) * 10;
    this.resilience = Math.round(this.resilience / 10) * 10;

    if (!this.forcefield) {
      this.shield = Math.max(10, Math.floor(this.shield * 1.5));
    }

    for (const weapon of this.weapons) {
      weapon.dices = Math.floor(weapon.dices * 1.5);
      if (weapon.violenceDices) {
        weapon.violenceDices = Math.floor(weapon.violenceDices * 1.5);
      }
    }

    const boosted = new Set<Aspect>();

    let counter = 0;
    for (const aspect of sortedAspects) {
      if (aspect.exceptional && !aspect.major) {
        this.boostMajor(aspect);

        boosted.add(aspect)

        counter += 1;
        if (counter >= info.elite.major_aspects) {
          break;
        }
      }
    }

    if (counter < info.elite.major_aspects) {
      for (const aspect of sortedAspects) {
        if (boosted.has(aspect)) {
          continue;
        }

        if (aspect.exceptional) {
          this.boostMajor(aspect);

          counter += 1;
          if (counter >= info.elite.major_aspects) {
            break;
          }
        }
      }
    }

    const fixedCapacities = this.query(['Anathème', 'Domination', 'Actions multiples (1)', 'Peur (1)', 'Charge brutale', 'Indestructible', 'Régénération', 'Protéiforme (mineur)']
      .map(data => capacities.find(c => c.name === data)!));

    if (fixedCapacities.length && !this.capacities.some(c => fixedCapacities.map(e => e.raw()).includes(c.raw()))) {
      this.capacities.push(new Capacity(fixedCapacities[0]));
    }

    for (const capacity of this.capacities) {
      if (capacity.raw() === 'Actions multiples') {
        if (capacity.name === 'Actions multiples (1)') {
          capacity.copy(capacities.find(c => c.name === 'Actions multiples (2)')!);
        } else if (capacity.name === 'Actions multiples (2)') {
          capacity.copy(capacities.find(c => c.name === 'Actions multiples (3)')!);
        } else if (capacity.name === 'Actions multiples (3)') {
          capacity.copy(capacities.find(c => c.name === 'Actions multiples (4)')!);
        } else if (capacity.name === 'Actions multiples (4)') {
          capacity.copy(capacities.find(c => c.name === 'Actions multiples (5 ou plus)')!);
        }
      }
    }

    const filteredCapacities = this.query(capacities, { elite: true });

    counter = 0;
    for (const capacity of filteredCapacities) {
      if (this.hasCapacity(capacity)) {
        continue;
      }

      this.capacities.push(new Capacity(capacity));

      counter += 1;
      if (counter === info.elite.capacities) {
        break;
      }
    }
  }

  query<T extends { tags: string [], raw: (() => string) }>(elements: T[], options: { elite?: boolean, level?: string, filterWeakness?: boolean, effect?: boolean } = {}) {
    const types: string[] = [];

    if (this.type === PATRON_COLOSSE) {
      types.push(PATRON, COLOSSE);
    } else if (this.type === ALLIE) {
      types.push('autre');
    } else {
      types.push(this.type);
    }

    const levels: string[] = [];
    const level = options.level ?? this.level;

    if (level === RECRUE) {
      levels.push(RECRUE);
    } else if (level === INITIE) {
      levels.push(RECRUE, INITIE);
    } else if (level === HEROS) {
      levels.push(RECRUE, INITIE, HEROS);
    }

    const excluded = this.type === ALLIE ? [] : ['humain'];
    const required: string[] = [];

    if (options.elite) {
      required.push('élite');
    } else {
      excluded.push('élite');
    }

    if (options.filterWeakness) {
      excluded.push('faiblesse (recrue)', 'faiblesse (initié)', 'faiblesse (héros)');
    }

    if (options.effect) {
      required.push('effet');
    } else {
      excluded.push('effet');
    }

    const result = elements.filter(c =>
      required.every(tag => c.tags.includes(tag)) &&
      excluded.every(tag => !c.tags.includes(tag)) &&
      types.some(tag => c.tags.includes(tag)) &&
      levels.some(tag => c.tags.includes(tag))
    );
    shuffle(result);

    return this.clean(result);
  }

  boost(aspect: Aspect) {
    let boost = Math.floor(aspect.score * 0.5);

    if (aspect.score + boost > 20) {
      boost -= aspect.score + boost - 20;
    }

    aspect.score += boost;

    if (aspect.id === BETE) {
      this.defense += Math.floor(boost * 0.5);

      if (aspect.exceptional && aspect.major) {
        for (const weapon of this.weapons) {
          if (weapon.contact) {
            weapon.raw += boost;
          }
        }
      }
    } else if (aspect.id === MACHINE) {
      this.reaction += Math.floor(boost * 0.5);
    } else if (aspect.id === MASQUE) {
      if (this.type !== BANDE && !(this.aspects[MASQUE].exceptional && this.aspects[MASQUE].major)) {
        this.initiative += Math.floor(boost * 0.5);
      }
    }
  }

  boostMajor(aspect: Aspect) {
    const toMajor = !aspect.major;
    aspect.major = true;

    let boost = Math.floor(aspect.exceptional * 0.5);

    if (aspect.exceptional + boost > 10) {
      boost -= aspect.exceptional + boost - 10;
    }

    aspect.exceptional += boost;

    if (aspect.id === BETE) {
      for (const weapon of this.weapons) {
        if (weapon.contact) {
          weapon.raw += boost;

          if (toMajor) {
            weapon.raw += aspect.score;
          }
        }
      }
    } else if (aspect.id === MACHINE) {
      this.reaction += boost;
    } else if (aspect.id === MASQUE) {
      if (this.type !== BANDE) {
        this.initiative = 30;
      }

      this.defense += boost;
    }
  }

  recompute() {
    this.recomputeDefense();
    this.recomputeReaction();
    this.recomputeInitiative();
  }

  recomputeDefense() {
    this.defense = Math.floor(this.aspects[BETE].score / 2) + this.aspects[MASQUE].exceptional;
  }

  recomputeReaction() {
    this.reaction = Math.floor(this.aspects[MACHINE].score / 2) + this.aspects[MACHINE].exceptional;
  }

  recomputeInitiative() {
    if (this.type === BANDE) {
      this.initiative = 0;
    } else if (this.aspects[MASQUE].major) {
      this.initiative = 30;
    } else {
      this.initiative = Math.floor(this.aspects[MASQUE].score / 2) + this.aspects[MASQUE].exceptional;
    }
  }

  recomputeWeapon(weapon: Weapon) {
    weapon.raw = 0;

    if (weapon.contact) {
      if (this.aspects[BETE].exceptional) {
        weapon.raw += this.aspects[BETE].exceptional;

        if (this.aspects[BETE].major) {
          weapon.raw += this.aspects[BETE].score;
        }
      }
    }
  }

  addWeapon() {
    this.weapons.push(new Weapon());
  }

  addCapacity() {
    this.capacities.push(new Capacity());
  }

  removeWeapon(weapon: Weapon) {
    this.weapons = this.weapons.filter(w => w !== weapon);
  }

  removeCapacity(capacity: Capacity) {
    this.capacities = this.capacities.filter(c => c !== capacity);
  }

  export() {
    const data = JSON.parse(JSON.stringify(this));

    for (const aspect of data.aspects) {
      delete aspect.id;
    }

    for (const capacity of data.capacities) {
      delete capacity.index;
      delete capacity.tags;
    }

    if (this.type === BANDE) {
      delete data.weapons;
      delete data.armor;
      delete data.resilience;
      delete data.initiative;
    } else {
      delete data.outbreak;

      for (const weapon of data.weapons) {
        for (const effect of weapon.effects) {
          delete effect.index;
          delete effect.tags;
          delete effect.cost;
        }
      }
    }

    return data;
  }

  import(data: any) {
    this.copy(data);
  }
}

export interface NpcGrid {
  aspects: { min: number; max: number; limit: number; };
  aspects_exceptionals: { min: number; max: number; limit: number; major_min: number; major_max: number };
  health: { min: number; max: number; };
  armor: { min: number; max: number; };
  forcefield: { min: number; max: number; };
  shield: { min: number; max: number; };
  energy: { min: number; max: number; };
  resilience: number;
  capacities: number;
  outbreak: { min: number; max: number; effects_min: number; effects_max: number };
  elite: { major_aspects: number; capacities: number },
  weapon: { effect: number, points: number }
}

export function grid(type: string, level: string) {
  return <NpcGrid> (<any> GRID)[type][level];
}