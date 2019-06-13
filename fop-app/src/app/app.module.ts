import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FopTitleComponent } from './foptitle/foptitle.component';
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
import { OrgaoComponent } from './orgao/orgao.component';
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FopTitleComponent,
    FederacaoComponent,
    ClubesComponent,
    ExposicoesComponent,
    GestfopComponent,
    CriadoresComponent,
    CtjComponent,
    ContactosComponent,
    LegislacaoComponent,
    DocumentacaoComponent,
    ObjectivosComponent,
    EstatutosComponent,
    SocialComponent,
    OrgaoComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
