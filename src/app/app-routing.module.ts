import { TabuadaComponent } from './tabuada/tabuada.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Aqui só faço o tratamento das rotas, caso usuário digite algo diferente no endereço
const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'tabuada', component: TabuadaComponent},
  { path: '**', redirectTo: 'calculadora', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
