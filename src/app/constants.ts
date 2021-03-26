export const CHAIR = 0;
export const BETE = 1;
export const MACHINE = 2;
export const DAME = 3;
export const MASQUE = 4;
export const RECRUE = 'recrue';
export const INITIE = 'initié';
export const HEROS = 'héros';
export const HOSTILE = 'hostile';
export const SALOPARD = 'salopard';
export const PATRON = 'patron';
export const COLOSSE = 'colosse';
export const BANDE = 'bande';
export const PATRON_COLOSSE = 'patron colosse';
export const ALLIE = 'allié';
export const CONTACT = 'contact';
export const COURTE = 'courte';
export const MOYENNE = 'moyenne';
export const LONGUE = 'longue';
export const LOINTAINE = 'lointaine';

export const CAPACITIES = [
  "Abysse | héros - salopard - colosse - patron | Tous les dégâts infligés par le PNJ à un PJ sont retirés aux points d’espoir et non aux points de santé ou points d’armure.",
  "Abyssal | héros - salopard - colosse - patron | Le PNJ est insensible à tous les types de dégâts sauf ceux avec l’effet anti-Anathème et lumière X.",
  "À coup sûr (contact) | héros - salopard - patron | Le PNJ, lorsqu’il attaque au contact, ne rate jamais sa cible. La défense du personnage ciblé est systématiquement ramenée à 0 pour chacune de ses attaques.",
  "À coup sûr (distance) | héros - salopard - patron | Le PNJ, lorsqu’il attaque à distance, ne rate jamais sa cible. La réaction du personnage ciblé est systématiquement ramenée à 0 pour chacune de ses attaques.",
  "Actions multiples (1) | recrue - hostile - salopard - colosse - patron | Le PNJ possède 1 action de combat en plus de son action de déplacement et de combat de base. Ces actions sont à effectuer à son initiative.",
  "Actions multiples (2) | initié - hostile - salopard - colosse - patron | Le PNJ possède 2 actions de combat en plus de son action de déplacement et de combat de base. Ces actions sont à effectuer à son initiative.",
  "Actions multiples (3) | initié - hostile - salopard - colosse - patron | Le PNJ possède 3 actions de combat en plus de son action de déplacement et de combat de base. Ces actions sont à effectuer à son initiative.",
  "Actions multiples (4) | initié - hostile - salopard - colosse - patron | Le PNJ possède 4 actions de combat en plus de son action de déplacement et de combat de base. Ces actions sont à effectuer à son initiative.",
  "Actions multiples (5 ou plus) | héros - hostile - salopard - colosse - patron | Le PNJ possède 5 ou plus actions de combat en plus de son action de déplacement et de combat de base. Ces actions sont à effectuer à son initiative.",
  "Anathème | recrue - hostile - salopard - colosse - bande | Le PNJ peut décider d’infliger ses dégâts sur les points d’espoir plutôt que sur les points de santé. Le CdF fonctionne, mais pas les points d’armure. Si le PNJ est tué, les PJ ayant subi cet effet récuèrent 1D6 points d’espoir par tranche complète de 6 points d’espoir perdus.",
  "Armes multiples (1 à 3 standards) | recrue - hostile - salopard - colosse - patron | Le PNJ peut être doté de 3 armes jusqu’à standards de l’arsenal.",
  "Armes multiples (1 à 3 avancées) | initié - hostile - salopard - colosse - patron | Le PNJ peut être doté de 3 armes jusqu’à avancées de l’arsenal.",
  "Armes multiples (1 à 3 rares) | héros - hostile - salopard - colosse - patron | Le PNJ peut être doté de 3 armes jusqu’à rares de l’arsenal.",
  "Assassin | initié - hostile - salopard - patron | Lorsqu’il prend sa cible par surprise ou lorsqu’il l’attaque dans le dos, le PNJ ajoute son score de Masque à ses dégâts, score de Masque exceptionnel inclus.",
  "Autorité (mineur) | faiblesse (recrue) - recrue - salopard - patron | Si le PNJ meurt, les PNJ sous ses ordres subissent 3 points de malus sur tous leurs aspects, leur défense et leur réaction, jusqu’à la fin de la phase de conflit.",
  "Autorité (majeur) | faiblesse (initié) - recrue - salopard - patron | Si le PNJ meurt, les PNJ sous ses ordres fuient ou se rendent automatiquement.",
  "Charge brutale | recrue - salopard - colosse - patron | Une fois par combat, le PNJ peut parcourir instantanément la distance qui le sépare d’un ennemi à portée moyenne ou inférieure. Il doit faire un jet pour toucher, s’il réussit, il inflige à son ennemi les dégâts de son arme auxquels s’ajoute deux fois son score de Bête.",
  "Contradiction | initié - colosse - patron | Chaque échec que subit un PJ sur ses tests face au PNJ lui fait perdre systématiquement 1D6 points d’espoir.",
  "Contrôle | héros - salopard - patron | À portée longue ou inférieure, le PNJ peut faire agir une méta-armure à sa guise (la faire se déplacer, tirer, combattre, etc.). Seule une réussite sur un test base Hargne ou Tech- nique difficulté difficile (6) peut éviter à un personnage de se faire posséder. Activer cette capacité compte pour une action de n’importe quel type.",
  "Coopération | recrue - hostile - salopard | En agissant de façon coordonnée, 2 PNJ (ou plus) avec cette capacité gagnent 2 à leur défense et à leur réaction et gagnent chacun une action de combat supplémentaire. Attention, cette capacité ne peut pas se cumuler sur des PNJ en bénéficiant déjà.",
  "Copie parfaite | initié - hostile - salopard - patron - bande | Lorsqu’un PJ cherche à savoir si le PNJ est une créature de l’Anathème, il doit réussir un test base Perception ou Instinct difficulté difficile (6).",
  "Désespérant | recrue - hostile - salopard - colosse - patron - bande | Si un PJ détruit le PNJ, il doit réussir un test base Hargne combo Sang-Froid (difficulté au choix du MJ) pour ne pas perdre 1D6 point d’espoir.",
  "Dissimulé | recrue - hostile - salopard - patron - bande | Lorsque le PNJ est en présence d’autres créatures de son Seigneur, il les dissimule et leur confère un bonus de 2 en défense et en réaction tant qu’il est présent à portée moyenne ou inférieure.",
  "Domination | initié - salopard - colosse - patron - bande | Une fois par tour, sans utiliser d’action, le PNJ peut tenter de prendre le contrôle de l’esprit d’un PJ grâce à un test sous l’aspect Machine en op position à la Hargne du PJ visé (avec overdrives) (ou Bête divisée par 2 pour un PNJ). S’il réussit, ce der nier agit sous ses ordres au prochain tour comme s’il possédait une action de combat et de déplacement (et uniquement au prochain tour). Le personnage dominé perd ce tour de jeu et ne peut pas effectuer d’action.",
  "Doubles | héros - patron | Une fois par phase de conflit, Le PNJ peut créer 2D6 doubles de lui qui peuvent tous agir indépendamment, mais dont les aspects, les valeurs dérivées et les dégâts sont divisés par deux.",
  "Drain d’énergie | initié - salopard - colosse - patron | Le PNJ peut décider d’infliger ses dégâts sur les points d’énergie plutôt que sur les points de santé. Le CdF fonctionne, mais pas les points d’armure. Si le PNJ est tué, les PJ ayant subi cet effet récupèrent 1D6 points d’énergie par tranche complète de 6 points d’énergie perdus. Les points drainés ainsi peuvent être utilisés pour activer de puissantes armes, il est conseillé de noter leur total. Si une arme ou une capacité utilisant des points d’énergie est activée, ce sont les points issus du drain d’énergie qui sont ponctionnés en premier.",
  "Duel | initié - patron - Une fois par phase de conflit, le PNJ peut créer un cercle d’énergie indestructible autour de lui et d’un PJ. Aucun PJ ou PNJ à l’extérieur du cercle ne peut plus agir en son sein, laissant le PNJ et son adversaire dans un face à face mortel. Seul un test base Endurance difficulté très difficile (9) permet à quiconque de mettre fin au duel, sinon, il s’arrête dès que l’un des combattants tombe à 0 point de santé.",
  "En réseau | initié - patron | Le PNJ, pour être détruit, doit être enfermé dans un contenant, sinon il s’enfuit par les réseaux divers et variés.",
  "Équipement (1 à 3 standard) | recrue - hostile - salopard - colosse - patron | Le PNJ peut être doté de 1 à 3 modules ou armes jusqu’à standard tirés de l’arsenal. Il est possible que cette capacité soit présente sur des PNJ ne possédant pas de méta-armure. Dans ce cas, les PNJ profitent seu- lement des effets de ces capacités, sans dépenser de PE, comme s’ils disposaient simplement d’un équivalent. L’aspect et l’allure des modules sur ces PNJ est à la discrétion du MJ.",
  "Équipement (1 à 3 avancé) | initié - salopard - colosse - patron | Le PNJ peut être doté de 1 à 3 modules ou armes jusqu’à avancé tirés de l’arsenal. Il est possible que cette capacité soit présente sur des PNJ ne possédant pas de méta-armure. Dans ce cas, les PNJ profitent seu- lement des effets de ces capacités, sans dépenser de PE, comme s’ils disposaient simplement d’un équivalent. L’aspect et l’allure des modules sur ces PNJ est à la discrétion du MJ.",
  "Équipement (1 à 3 rare) | héros - hostile - salopard - colosse - patron | Le PNJ peut être doté de 1 à 3 modules ou armes jusqu’à rare tirés de l’arsenal. Il est possible que cette capacité soit présente sur des PNJ ne possédant pas de méta-armure. Dans ce cas, les PNJ profitent seu- lement des effets de ces capacités, sans dépenser de PE, comme s’ils disposaient simplement d’un équivalent. L’aspect et l’allure des modules sur ces PNJ est à la discrétion du MJ.",
  "Évolution | initié - salopard - colosse - patron | Tant que le PNJ est présent dans une phase de conflit, ses PNJ alliés à portée longue ou inférieure peuvent bénéficier d’un effet d’arme supplémentaire à choisir parmi : dégâts continus, choc 2, meurtrier, destructeur ou barrage 3.",
  "Exosquelette de combat (1) | recrue - hostile - salopard - colosse - patron - bande - autre | Le PNJ bénéficie d’aspects exceptionnels et d’un module de saut et de course 1. Si ses PA tombent à 0, ces bénéfices sont annulés.",
  "Exosquelette de combat (2) | initié - hostile - salopard - colosse - patron - bande - autre | Le PNJ bénéficie d’aspects exceptionnels et d’un module de saut et de course 2. Si ses PA tombent à 0, ces bénéfices sont annulés.",
  "Exosquelette de combat (3) | héros - hostile - salopard - colosse - patron - bande - autre | Le PNJ bénéficie d’aspects exceptionnels et d’un module de saut et de course 3. Si ses PA tombent à 0, ces bénéfices sont annulés.",
  "Haine de l’Anathème | initié - salopard - colosse - patron - autre | Les dégâts du PNJ sont augmentés de 3D6 contre les créatures de l'Anathème.",
  "Hypersensibilité lumineuse | faiblesse (héros) - recrue - hostile - salopard - colosse - patron | Toute utilisation de l’effet lumière X annule pendant 1D6 tours une ou plusieurs capacités du PNJ (au choix du MJ). Les dégâts infligés au PNJ avec des armes possédant l’effet lumière X sont doublés.",
  "Immatériel | héros - patron | Le PNJ est intangible et donc insensible aux dégâts. Pour lui infliger des dommages, les effets lumière X ou anti-Anathème doivent être utilisés en même temps que l’exposition à de l’élément alpha brut (les personnages présents subissent une perte d’1D6 points d’espoir par tour en présence d’élément alpha brut).",
  "Immortel | héros - patron | Le PNJ peut dépenser une action de déplacement pour récupérer de 10 à 100 points de santé (au choix du MJ). Cette capacité ne peut être activée qu’une fois par tour en phase de conflit.",
  "Implacable | recrue - salopard - colosse - patron | Si le PNJ n’utilise pas son action de déplacement durant son tour, il peut effectuer une attaque supplémentaire.",
  "Indestructible | héros - patron | Seules les armes avec l’effet anti-véhicule peuvent infliger des dégâts au PNJ. La violence des armes avec l’effet anti-véhicule font aussi baisser ses PS.",
  "Indestructible | héros - bande | Seules les armes avec l’effet anti-véhicule peuvent infliger de la violence au PNJ. Les dégâts des armes avec l’effet anti-véhicule font aussi baisser ses PS.",
  "Infiltré | initié - salopard - colosse - patron - bande | Le PNJ peut se retrouver partout et est difficilement identifiable et différentiable d’humains communs, même quand il n’est pas seul. Seul un test base Perception ou Instinct difficulté délicat (4) peut permettre de le repérer.",
  "Intangible | héros - hostile - salopard - patron | Tant qu’il est intangible, le PNJ reste insensible à la violence ou aux dégâts des armes, sauf si ceux-ci bénéficient de l’effet anti-Anathème. Tant qu’il est intangible, il ne peut cependant pas agir contre les personnages en méta-armures. L’intangibilité peut s’activer ou se désactiver une seule fois par tour en phase de conflit.",
  "Invisibilité | héros - hostile - salopard - patron | Le PNJ bénéficie de la même capacité que la méta-armure Rogue, sous les mêmes conditions.",
  "Kamikaze | héros - hostile - salopard - patron | Lorsqu’il a atteint sa cible, le PNJ peut exploser, infligeant ainsi 8D6 + 15 points de dégâts dispersion 6 à portée courte autour de lui.",
  "Loyauté sans faille | faiblesse (recrue) - recrue - hostile - salopard - colosse - patron | Le PNJ ne fuit jamais et ne se rend jamais.",
  "Lumière | salopard - colosse - patron - autre | Quelque chose émane du PNJ à tel point que les créatures des ténèbres n’osent s’en approcher à moins de portée moyenne. Si elles devaient se trouver à une portée inférieure, elles subiraient automatiquement l’effet lumière 6 tant qu’elles y restent.",
  "Membre du Knight (recrue) | recrue - salopard - colosse - patron | Le PNJ bénéficie d’une méta-armure, d’une arme de contact et à distance ainsi que de 2 modules tirés de l’arsenal.",
  "Membre du Knight (initié) | initié - salopard - colosse - patron | Le PNJ bénéficie d’une méta-armure, d’une arme de contact et à distance ainsi que de 2 modules tirés de l’arsenal.",
  "Membre du Knight (héros) | héros - salopard - colosse - patron | Le PNJ bénéficie d’une méta-armure, d’une arme de contact et à distance ainsi que de 2 modules tirés de l’arsenal.",
  "Mémoire | initié - patron | Le PNJ est capable de connaître le passé complet de tous les personnages qu’il rencontre et de savoir les fautes qu’ils ont commises. Chaque test base Parole, Aura ou Sang-froid raté face à lui engendre la perte d’1D6 points d’espoir.",
  "Meneur d’hommes | recrue - salopard - colosse - patron | Le PNJ, lorsqu’il est ac­compagné d’alliés sous ses ordres, leur procure un bonus de 2 en défense et en réaction, ainsi qu’un bonus de 2 en débordement et de 50 en cohésion si les alliés forment une bande.",
  "Méta-armure (4 points d’aspect exceptionnel et 1 à 3 modules standards) | recrue - hostile - salopard - colosse - patron",
  "Méta-armure (8 points d’aspect exceptionnel et 1 à 3 modules avancés) | initié - hostile - salopard - colosse - patron",
  "Méta-armure (12 points d’aspect exceptionnel et 1 à 3 modules rares) | héros - hostile - salopard - colosse - patron",
  "Méthodique | faiblesse (héros) - recrue - hostile - salopard - colosse - patron - bande | Si la cible du PNJ est mobile, c’est-à-dire si elle a effectué une action de déplacement à ce tour, elle ne subit pas de score de débordement.",
  "Module (module standard) | recrue - hostile - salopard - colosse - patron | Le PNJ bénéficie de l'équivalent d'un module standard.",
  "Module (module avancé) | initié - hostile - salopard - colosse - patron | Le PNJ bénéficie de l'équivalent d'un module avancé.",
  "Module (module rare) | héros - hostile - salopard - colosse - patron | Le PNJ bénéficie de l'équivalent d'un module rare.",
  "Monture | initié - patron | Le destrier du PNJ lui permet de bénéficier de points supplémentaires dans l’aspect Bête ainsi qu’en défense et en réaction. Pour le mettre à terre, il faut réussir un test base Déplacement contre son aspect Chair divisé par 2 et avoir au moins un overdrive de niveau 3 en Force.",
  "Né dans la lumière | recrue - hostile - salopard - colosse | Le PNJ est insensible aux effets lumière X et anti-Anathème.",
  "Parasite | initié - hostile - salopard - colosse - patron | Tant que le PNJ combat au sein d’une bande (amie ou ennemie), il ne peut pas mourir. S’il tombe à 0 PS, il se relève au tour suivant avec la moitié de ses PS initiaux.",
  "Peur (1) | initié - hostile - salopard - colosse - patron | Au début d’une phase de conflit face au PNJ (ou plusieurs PNJ) avec la capacité peur, les PJ doivent réussir un test base Sang-Froid ou Hargne opposé à un aspect (divisé par 2, au choix du MJ) du PNJ. S’ils réussissent, ils subissent un malus de 1 dé à chacun de leurs tests. S’ils échouent, ils subissent un malus de 1 dés et leur réaction comme leur défense sont réduites de 1 points. Si c’est un échec critique, le PJ est tétanisé pendant 3D6 tours et ne peut rien faire. Un PJ ne peut pas subir cet effet plusieurs fois par tour.",
  "Peur (2) | initié - hostile - salopard - colosse - patron | Au début d’une phase de conflit face au PNJ (ou plusieurs PNJ) avec la capacité peur, les PJ doivent réussir un test base Sang-Froid ou Hargne opposé à un aspect (divisé par 2, au choix du MJ) du PNJ. S’ils réussissent, ils subissent un malus de 1 dé à chacun de leurs tests. S’ils échouent, ils subissent un malus de 2 dés et leur réaction comme leur défense sont réduites de 2 points. Si c’est un échec critique, le PJ est tétanisé pendant 3D6 tours et ne peut rien faire. Un PJ ne peut pas subir cet effet plusieurs fois par tour.",
  "Peur (3) | initié - hostile - salopard - colosse - patron | Au début d’une phase de conflit face au PNJ (ou plusieurs PNJ) avec la capacité peur, les PJ doivent réussir un test base Sang-Froid ou Hargne opposé à un aspect (divisé par 2, au choix du MJ) du PNJ. S’ils réussissent, ils subissent un malus de 1 dé à chacun de leurs tests. S’ils échouent, ils subissent un malus de 3 dés et leur réaction comme leur défense sont réduites de 3 points. Si c’est un échec critique, le PJ est tétanisé pendant 3D6 tours et ne peut rien faire. Un PJ ne peut pas subir cet effet plusieurs fois par tour.",
  "Phéromones | initié - patron | Le PNJ peut appeler à lui toutes ses créatures des ténèbres présentes dans un rayon de 10 kilomètres et les commander, même si elles ne sont pas sous ses ordres à l’origine.",
  "Prescience | héros - patron | Le PNJ attaque toujours de sorte à toucher le point faible de son ennemi. Il peut toujours infliger le maximum de dégâts avec ses armes.",
  "Protéiforme (mineur) | initié - hostile - salopard - colosse - patron | Le PNJ peut changer son apparence et se doter d’armes avec les effets suivants (au choix du MJ) : meurtrier, destructeur ou choc 1.",
  "Protéiforme (majeur) | héros - hostile - salopard - colosse - patron | Le PNJ peut changer son apparence et se doter d’armes avec les effets suivants (au choix du MJ) : ignore CdF, ignore armure ou choc 2.",
  "Régénération | initié - hostile - salopard - colosse - patron | Si le PNJ combat au milieu d’une bande alliée, il peut lui infliger une attaque gratuite pour se régénérer d’autant de points de santé que les dégâts infligés. Les dégâts infligés sont convertis en violence et impactent directement la cohésion de la bande.",
  "Regain de santé | initié - salopard - colosse - patron - bande | Tant que le PNJ (ou plusieurs du même type) est présent dans une phase de conflit, les bandes de son Seigneur récupèrent 6D6 de cohésion chaque tour, les hostiles 3D6 points de santé, les salopards 4D6 et les patrons 6D6. Le PNJ lui-même récupère 6D6 points de cohésion à chaque tour. Loyauté sans faille : Le PNJ ne fuit jamais et ne se rend jamais.",
  "Renaissance | initié - salopard - colosse - patron - bande | Le PNJ peut se former aussi bien à partir d’un être vivant et désespéré que d’un cadavre humain. S’il tombe à 0 en cohésion, il se relève ou se réincarne dans un autre corps (mort ou vivant) à portée lointaine avec la totalité de sa cohésion.",
  "Résistant | recrue - salopard - patron | Peu importe sa taille, le PNJ est considéré comme un colosse.",
  "Ressources illimitées | initié - patron | Ressources illimitées : Le PNJ a accès à toutes les ressources qu’il souhaite, qu’il s’agisse d’argent, de matériel ou d’hommes.",
  "Sensibilité IEM | faiblesse (recrue) - recrue - hostile - salopard - colosse - patron | L’utilisation de grenades IEM contre le PNJ lui inflige automatiquement parasitage 4.",
  "Surhomme (3 points d’aspect exceptionnel) | recrue - hostile - salopard - colosse - patron - autre | Le MJ peut répartir entre 3 points dans les aspects exceptionnels du PNJ (et, bien entendu, en créer si le PNJ n’en a pas) et lui faire bénéficier de leurs effets.",
  "Surhomme (9 points d’aspect exceptionnel) | initié - hostile - salopard - colosse - patron - autre | Le MJ peut répartir entre 9 points dans les aspects exceptionnels du PNJ (et, bien entendu, en créer si le PNJ n’en a pas) et lui faire bénéficier de leurs effets.",
  "Surhomme (18 points d’aspect exceptionnel) | héros - hostile - salopard - colosse - patron - autre | Le MJ peut répartir entre 18 points dans les aspects exceptionnels du PNJ (et, bien entendu, en créer si le PNJ n’en a pas) et lui faire bénéficier de leurs effets.",
  "Tailles diverses | recrue - hostile - salopard - patron | Certains PNJ de ce type peuvent être considérés comme des colosses, au choix du MJ lorsqu’il les inclut à sa mission.",
  "Talon d’Achille | initié - patron | Lorsqu’il attaque un personnage, le PNJ touche systématiquement, de plus il inflige des dégâts à sa valeur la plus basse à choisir entre les points d’armure, d’énergie ou d’espoir.",
  "Téléportation (type) | héros - hostile - salopard - patron | Le PNJ peut apparaître et disparaître à volonté dans un type de zone défini par le MJ.",
  "Tremblement de terre | recrue - salopard - colosse - patron | Toutes les attaques du PNJ infligent automatiquement l’effet choc 1.",
  "Union | initié - hostile - salopard - colosse | Deux PNJ possédant le même nom peuvent s’unir, fusionner et disparaître pour former une entité plus puissante, possédant le même nom et le même type que celles d’origine. Les aspects de la nouvelle entité ainsi créée sont augmentés de 2, ses dégâts sont augmentés de 3D6 à 5D6 (au choix du MJ) et ses points de santé sont doublés. Par contre, sa défense et sa réaction sont divisées par 2. Une entité déjà issue d’une union peut s’unir à d’autres entités du même nom pour devenir encore plus forte.",
  "Vol | initié - hostile - salopard - colosse - patron - bande | Le PNJ peut voler sur une distance équivalente à portée longue par tour (une vitesse égale à 3 si on la compare à celle des véhicules).",
  "Terreur | initié - hostile - salopard - colosse - patron - bande | Chaque début de tour, les personnages doivent réussir un test base Hargne combo Sang-Froid difficulté difficile (6) pour pouvoir agir, sinon, ils restent pétrifiés.",
  "Affidé du Seigneur | élite - recrue - hostile - salopard - colosse - patron - élite | Le PNJ ajoute le score de l’aspect de son Seigneur multiplié par 5 à son total de PS (ou de PA). L’aspect exceptionnel n’ajoute pas de PS supplémentaires.",
  "Protégé du Seigneur | élite - recrue - hostile - salopard - colosse - patron - élite | Les attaques portées sur le PNJ dont la base ou le combo comporte une caractéristique qui dépend de l’aspect du Seigneur de la créature infligent leurs dégâts divisés par deux.",
  "Serviteur du Seigneur | élite - recrue - hostile - salopard - colosse - patron - élite | Lorsque le PNJ attaque un PJ disposant d’un score dans l’aspect de son Seigneur égal à 7 ou plus (14 ou plus dans le cas d’un PNJ), ses dégâts sont augmentés d’une valeur fixe égale à son score dans l’aspect de son Seigneur (le score de l’aspect exceptionnel est ignoré dans ce calcul).",
  "Tueur du Seigneur | élite - recrue - hostile - salopard - colosse - patron - élite | Lorsque le PNJ attaque un PJ disposant d’un score dans l’aspect de son Seigneur égal à 7 ou plus (14 ou plus dans le cas d’un PNJ), ses dégâts sont augmentés d’une valeur fixe égale à son score dans l’aspect de son Seigneur (le score de l’aspect exceptionnel est ignoré dans ce calcul).",
  "Élu du Seigneur | élite - recrue - hostile - salopard - colosse - patron - élite | Le PNJ peut dépasser un score d’aspect de 20 et un score d’aspect exceptionnel de 10 uniquement dans l’aspect de son Seigneur. Ces scores ne peuvent excéder 40 pour l’aspect et 20 pour l’aspect exceptionnel.",
  "Accablant | élite - initié - hostile - salopard - colosse - patron - bande - élite | Si un PJ détruit le PNJ, il doit réussir un test base Hargne combo Sang-Froid (difficulté au choix du MJ) pour ne pas perdre 3D6 points d’espoir.",
  "Aura de souffrance | élite - initié - hostile - salopard - colosse - patron - élite | Un PJ (ou un PNJ) réussissant une attaque sur le PNJ subit automatiquement 2D6 points de dégâts avec les effets ignore armure et ignore CdF.",
  "Dévorant | élite - initié - hostile - salopard - colosse - patron - élite | Lorsque ce PNJ attaque un PJ au contact et le rate, alors l’arme en main du PJ (ou une des armes en main au choix du MJ) est détruite. Après la première destruction lors d’une phase de conflit, le PJ subissant l’effet peut choisir de ne pas se défendre et de recevoir automatiquement les dégâts sans que son arme soit détruite. Cet capacité ne fonctionne pas sur le armes de prestige et les armes possédant l’amélioration élément alpha. Une arme détruite est récupérée après la mission en cours. Pour symboliser cette perte, le PJ ayant perdu son arme peut subir un malus de 5 PG à son total gagné à la fin de la mission.",
  "Hybridation | élite - initié - hostile - salopard - colosse - patron - élite | Le PNJ est au service de deux Seigneurs. Pour lui, les capacités « du Seigneur » fonctionnent sur deux aspects (au choix du MJ) au lieu d’un seul.",
  "Intouchable | élite - héros - hostile - salopard - colosse - patron - élite | Le PNJ est insensible aux attaques qui nécessitent de dépasser sa réaction (incompatible avec insaisissable).",
  "Insaisissable | élite - héros - hostile - salopard - colosse - patron - élite | Le PNJ est insensible aux attaques qui nécessitent de dépasser sa défense (incompatible avec intouchable).",
  "Il est partout | élite - initié - salopard - colosse - patron - élite | Les attaques du PNJ ciblent automatiquement tous les PJ impliqués dans le conflit (sauf ceux cachés ou invisibles), peu importe leur distance ou leur attitude.",
  "Phase 2 | élite - recrue - patron - élite | Lorsque le PNJ a été mis à l’agonie une première fois, il récupère la totalité de ses PS, PA et PE (s’il en a) et reprend le combat. Il ne peut utiliser cette capacité qu’une seule fois. Le reste de la phase 2 doit être définie par le MJ."
];

export const EFFECTS = [
  "Anti-Anathème | recrue - hostile - salopard - colosse - patron - autre | 20",
  "Anti-véhicule | recrue - hostile - salopard - colosse - patron - bande | 20",
  "Choc 1 | recrue - hostile - salopard - colosse - patron | 5",
  "Choc 2 | initié - hostile - salopard - colosse - patron | 10",
  "Choc 4 | héros - hostile - salopard - colosse - patron | 15",
  "Choc 6 | héros - hostile - salopard - colosse - patron | 20",
  "Dispersion 2 | recrue - hostile - salopard - colosse - patron | 5",
  "Dispersion 3 | initié - hostile - salopard - colosse - patron | 10",
  "Dispersion 6 | héros - hostile - salopard - colosse - patron | 20",
  "Dégâts continus 3 | recrue - hostile - salopard - colosse - patron | 5",
  "Dégâts continus 6 | initié - hostile - salopard - colosse - patron | 15",
  "Dégâts continus 9 | héros - hostile - salopard - colosse - patron | 20",
  "Descructeur | recrue - hostile - salopard - colosse - patron - bande | 10",
  "Ignore Armure | initié - hostile - salopard - colosse - patron - bande | 20",
  "Ignore CdF | initié - hostile - salopard - colosse - patron - bande | 20",
  "Lumière 2 | recrue - hostile - salopard - colosse - patron - autre - bande | 5",
  "Lumière 4 | initié - hostile - salopard - colosse - patron - autre - bande | 15",
  "Lumière 6 | héros - hostile - salopard - colosse - patron - autre - bande | 20",
  "Meutrier | recrue - hostile - salopard - colosse - patron - bande | 10",
  "Parasitage 1 | recrue - hostile - salopard - colosse - patron | 5",
  "Parasitage 2 | initié - hostile - salopard - colosse - patron | 10",
  "Parasitage 4 | héros - hostile - salopard - colosse - patron | 15",
  "Parasitage 6 | héros - hostile - salopard - colosse - patron | 20",
  "Pénétrant 5 | initié - hostile - salopard - colosse - patron - bande | 5",
  "Pénétrant 10 | héros - hostile - salopard - colosse - patron - bande | 10",
  "Perce Armure 20 | recrue - hostile - salopard - colosse - patron - bande | 5",
  "Perce Armure 40 | initié - hostile - salopard - colosse - patron - bande | 10",
  "Perce Armure 60 | héros - hostile - salopard - colosse - patron - bande | 15",
  "Silencieux | recrue - hostile - salopard - colosse - patron | 10",
  "Soumission | recrue - hostile - salopard - colosse - patron | 15"
];

export const GRID = {
	[HOSTILE]: {
		[RECRUE]: {
			"aspects": {
				"min": 12,
				"max": 24,
				"limit": 8
			},
			"aspects_exceptionals": {
				"min": 2,
				"max": 6,
				"limit": 3,
				"major_min": 0,
				"major_max": 0
			},
			"health": {
				"min": 1,
				"max": 30
			},
			"armor": {
				"min": 0,
				"max": 0
			},
			"forcefield": {
				"min": 0,
				"max": 0
			},
			"shield": {
				"min": 0,
				"max": 0
			},
			"energy": {
				"min": 10,
				"max": 10
			},
      "resilience": 0,
			"capacities": 2
		},
		[INITIE]: {
			"aspects": {
				"min": 25,
				"max": 42,
				"limit": 12
			},
			"aspects_exceptionals": {
				"min": 3,
				"max": 8,
				"limit": 6,
				"major_min": 0,
				"major_max": 0
			},
			"health": {
				"min": 30,
				"max": 60
			},
			"armor": {
				"min": 1,
				"max": 10
			},
			"forcefield": {
				"min": 5,
				"max": 5
			},
			"shield": {
				"min": 5,
				"max": 5
			},
			"energy": {
				"min": 20,
				"max": 20
			},
      "resilience": 0,
			"capacities": 3
		},
		[HEROS]: {
			"aspects": {
				"min": 43,
				"max": 52,
				"limit": 14
			},
			"aspects_exceptionals": {
				"min": 9,
				"max": 15,
				"limit": 9,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 40,
				"max": 80
			},
			"armor": {
				"min": 10,
				"max": 40
			},
			"forcefield": {
				"min": 10,
				"max": 10
			},
			"shield": {
				"min": 10,
				"max": 10
			},
			"energy": {
				"min": 20,
				"max": 40
			},
      "resilience": 0,
			"capacities": 5
		}
	},
	[SALOPARD]: {
		[RECRUE]: {
			"aspects": {
				"min": 33,
				"max": 40,
				"limit": 12
			},
			"aspects_exceptionals": {
				"min": 7,
				"max": 13,
				"limit": 6,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 60,
				"max": 100
			},
			"armor": {
				"min": 0,
				"max": 40
			},
			"forcefield": {
				"min": 5,
				"max": 5
			},
			"shield": {
				"min": 0,
				"max": 0
			},
			"energy": {
				"min": 20,
				"max": 30
			},
      "resilience": 0,
			"capacities": 3
		},
		[INITIE]: {
			"aspects": {
				"min": 41,
				"max": 52,
				"limit": 14
			},
			"aspects_exceptionals": {
				"min": 8,
				"max": 16,
				"limit": 8,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 100,
				"max": 150
			},
			"armor": {
				"min": 40,
				"max": 60
			},
			"forcefield": {
				"min": 10,
				"max": 10
			},
			"shield": {
				"min": 5,
				"max": 10
			},
			"energy": {
				"min": 30,
				"max": 50
			},
      "resilience": 0,
			"capacities": 4
		},
		[HEROS]: {
			"aspects": {
				"min": 52,
				"max": 70,
				"limit": 16
			},
			"aspects_exceptionals": {
				"min": 9,
				"max": 19,
				"limit": 10,
				"major_min": 2,
				"major_max": 2
			},
			"health": {
				"min": 150,
				"max": 300
			},
			"armor": {
				"min": 60,
				"max": 100
			},
			"forcefield": {
				"min": 15,
				"max": 30
			},
			"shield": {
				"min": 15,
				"max": 20
			},
			"energy": {
				"min": 50,
				"max": 100
			},
      "resilience": 0,
			"capacities": 6
		}
	},
	[PATRON]: {
		[RECRUE]: {
			"aspects": {
				"min": 52,
				"max": 70,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 12,
				"max": 37,
				"limit": 10,
				"major_min": 2,
				"major_max": 4
			},
			"health": {
				"min": 160,
				"max": 600
			},
			"armor": {
				"min": 40,
				"max": 100
			},
			"forcefield": {
				"min": 10,
				"max": 10
			},
			"shield": {
				"min": 10,
				"max": 10
			},
			"energy": {
				"min": 10,
				"max": 50
			},
      "resilience": 0.033,
			"capacities": 5
		},
		[INITIE]: {
			"aspects": {
				"min": 71,
				"max": 90,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 18,
				"max": 45,
				"limit": 10,
				"major_min": 2,
				"major_max": 4
			},
			"health": {
				"min": 300,
				"max": 700
			},
			"armor": {
				"min": 100,
				"max": 200
			},
			"forcefield": {
				"min": 10,
				"max": 20
			},
			"shield": {
				"min": 10,
				"max": 30
			},
			"energy": {
				"min": 50,
				"max": 100
			},
      "resilience": 0.05,
			"capacities": 7
		},
		[HEROS]: {
			"aspects": {
				"min": 90,
				"max": 100,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 25,
				"max": 50,
				"limit": 10,
				"major_min": 3,
				"major_max": 5
			},
			"health": {
				"min": 400,
				"max": 1000
			},
			"armor": {
				"min": 150,
				"max": 300
			},
			"forcefield": {
				"min": 20,
				"max": 50
			},
			"shield": {
				"min": 20,
				"max": 40
			},
			"energy": {
				"min": 100,
				"max": 200
			},
      "resilience": 0.1,
			"capacities": 9
		}
	},
	[PATRON_COLOSSE]: {
		[RECRUE]: {
			"aspects": {
				"min": 52,
				"max": 70,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 12,
				"max": 37,
				"limit": 10,
				"major_min": 2,
				"major_max": 4
			},
			"health": {
				"min": 160,
				"max": 600
			},
			"armor": {
				"min": 40,
				"max": 100
			},
			"forcefield": {
				"min": 10,
				"max": 10
			},
			"shield": {
				"min": 10,
				"max": 10
			},
			"energy": {
				"min": 10,
				"max": 50
			},
      "resilience": 0.1,
			"capacities": 5
		},
		[INITIE]: {
			"aspects": {
				"min": 71,
				"max": 90,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 18,
				"max": 45,
				"limit": 10,
				"major_min": 2,
				"major_max": 4
			},
			"health": {
				"min": 300,
				"max": 700
			},
			"armor": {
				"min": 100,
				"max": 200
			},
			"forcefield": {
				"min": 10,
				"max": 20
			},
			"shield": {
				"min": 10,
				"max": 30
			},
			"energy": {
				"min": 50,
				"max": 100
			},
      "resilience": 0.2,
			"capacities": 7
		},
		[HEROS]: {
			"aspects": {
				"min": 90,
				"max": 100,
				"limit": 20
			},
			"aspects_exceptionals": {
				"min": 25,
				"max": 50,
				"limit": 10,
				"major_min": 3,
				"major_max": 5
			},
			"health": {
				"min": 400,
				"max": 1000
			},
			"armor": {
				"min": 150,
				"max": 300
			},
			"forcefield": {
				"min": 20,
				"max": 50
			},
			"shield": {
				"min": 20,
				"max": 40
			},
			"energy": {
				"min": 100,
				"max": 200
			},
      "resilience": 0.3,
			"capacities": 9
		}
	},
	[BANDE]: {
		[RECRUE]: {
			"aspects": {
				"min": 18,
				"max": 37,
				"limit": 10
			},
			"aspects_exceptionals": {
				"min": 0,
				"max": 8,
				"limit": 8,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 50,
				"max": 150
			},
			"armor": {
				"min": 0,
				"max": 0
			},
			"forcefield": {
				"min": 0,
				"max": 0
			},
			"shield": {
				"min": 0,
				"max": 0
			},
			"energy": {
				"min": 0,
				"max": 0
			},
      "resilience": 0,
			"capacities": 2,
			"outbreak": {
				"min": 4,
				"max": 9,
				"effects_min": 0,
				"effects_max": 1
			}
		},
		[INITIE]: {
			"aspects": {
				"min": 38,
				"max": 46,
				"limit": 12
			},
			"aspects_exceptionals": {
				"min": 0,
				"max": 10,
				"limit": 8,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 200,
				"max": 400
			},
			"armor": {
				"min": 0,
				"max": 0
			},
			"forcefield": {
				"min": 0,
				"max": 0
			},
			"shield": {
				"min": 0,
				"max": 0
			},
			"energy": {
				"min": 0,
				"max": 0
			},
      "resilience": 0,
			"capacities": 3,
			"outbreak": {
				"min": 8,
				"max": 12,
				"effects_min": 1,
				"effects_max": 2
			}
		},
		[HEROS]: {
			"aspects": {
				"min": 39,
				"max": 56,
				"limit": 15
			},
			"aspects_exceptionals": {
				"min": 4,
				"max": 18,
				"limit": 8,
				"major_min": 1,
				"major_max": 2
			},
			"health": {
				"min": 400,
				"max": 600
			},
			"armor": {
				"min": 0,
				"max": 0
			},
			"forcefield": {
				"min": 5,
				"max": 10
			},
			"shield": {
				"min": 5,
				"max": 10
			},
			"energy": {
				"min": 0,
				"max": 0
			},
      "resilience": 0,
			"capacities": 5,
			"outbreak": {
				"min": 8,
				"max": 15,
				"effects_min": 2,
				"effects_max": 4
			}
		}
	},
	[COLOSSE]: {
		[RECRUE]: {
			"aspects": {
				"min": 28,
				"max": 37,
				"limit": 14
			},
			"aspects_exceptionals": {
				"min": 4,
				"max": 10,
				"limit": 8,
				"major_min": 1,
				"major_max": 1
			},
			"health": {
				"min": 100,
				"max": 200
			},
			"armor": {
				"min": 20,
				"max": 40
			},
			"forcefield": {
				"min": 0,
				"max": 0
			},
			"shield": {
				"min": 0,
				"max": 0
			},
			"energy": {
				"min": 0,
				"max": 0
			},
      "resilience": 0.1,
			"capacities": 2
		},
		[INITIE]: {
			"aspects": {
				"min": 38,
				"max": 52,
				"limit": 16
			},
			"aspects_exceptionals": {
				"min": 10,
				"max": 20,
				"limit": 10,
				"major_min": 2,
				"major_max": 2
			},
			"health": {
				"min": 200,
				"max": 400
			},
			"armor": {
				"min": 30,
				"max": 50
			},
			"forcefield": {
				"min": 5,
				"max": 5
			},
			"shield": {
				"min": 5,
				"max": 10
			},
			"energy": {
				"min": 10,
				"max": 50
			},
      "resilience": 0.2,
			"capacities": 4
		},
		[HEROS]: {
			"aspects": {
				"min": 52,
				"max": 70,
				"limit": 18
			},
			"aspects_exceptionals": {
				"min": 20,
				"max": 30,
				"limit": 10,
				"major_min": 3,
				"major_max": 3
			},
			"health": {
				"min": 400,
				"max": 600
			},
			"armor": {
				"min": 50,
				"max": 100
			},
			"forcefield": {
				"min": 10,
				"max": 10
			},
			"shield": {
				"min": 10,
				"max": 20
			},
			"energy": {
				"min": 50,
				"max": 100
			},
      "resilience": 0.3,
			"capacities": 6
		}
	}
};