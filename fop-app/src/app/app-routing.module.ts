import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FopTitleComponent } from './foptitle/foptitle.component';
import { HomeComponent } from './home/home.component';
import { FederacaoComponent } from './federacao/federacao.component';
import { ClubesComponent } from './clubes/clubes.component';
import { ExposicoesComponent } from './exposicoes/exposicoes.component';
import { GestfopComponent } from './gestfop/gestfop.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { CtjComponent } from './ctj/ctj.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LegislacaoComponent } from './legislacao/legislacao.component';
import { DocumentacaoComponent } from './documentacao/documentacao.component';
import { ObjectivosComponent } from './objectivos/objectivos.component';
import { EstatutosComponent } from './estatutos/estatutos.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'federacao', component: FederacaoComponent,
    children: [
      { path: 'documentacao', component: DocumentacaoComponent },
      { path: 'legislacao', component: LegislacaoComponent },
      { path: 'objectivos', component: ObjectivosComponent },
      { path: 'estatutos', component: EstatutosComponent },
      { path: 'social', component: SocialComponent }
  ]},
  { path: 'federacao/legislacao', redirectTo: '/federacao/legislacao', pathMatch: 'full' },
  { path: 'clubes', component: ClubesComponent },
  { path: 'exposicoes', component: ExposicoesComponent },
  { path: 'gestfop', component: GestfopComponent },
  { path: 'criadores', component: CriadoresComponent },
  { path: 'ctj', component: CtjComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', component: FederacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
