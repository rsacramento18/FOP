import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FederacaoComponent } from './federacao/federacao.component';
import { ClubesComponent } from './clubes/clubes.component';
import { ExposicoesComponent } from './exposicoes/exposicoes.component';
import { GestfopComponent } from './gestfop/gestfop.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { CtjComponent } from './ctj/ctj.component';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FederacaoComponent,
    ClubesComponent,
    ExposicoesComponent,
    GestfopComponent,
    CriadoresComponent,
    CtjComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
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
