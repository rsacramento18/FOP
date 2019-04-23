import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FederacaoComponent } from './federacao/federacao.component';
import { ClubesComponent } from './clubes/clubes.component';
import { ExposicoesComponent } from './exposicoes/exposicoes.component';
import { GestfopComponent } from './gestfop/gestfop.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { CtjComponent } from './ctj/ctj.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'federacao', component: FederacaoComponent },
  { path: 'clubes', component: ClubesComponent },
  { path: 'exposicoes', component: ExposicoesComponent },
  { path: 'gestfop', component: GestfopComponent },
  { path: 'criadores', component: CriadoresComponent },
  { path: 'ctj', component: CtjComponent },
  { path: 'contactos', component: ContactosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
