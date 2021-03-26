import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
    children: [{
      path: '**',
      redirectTo: ''
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }