import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainAreaComponent } from './main-area/main-area.component';

import { LoginComponent} from './login/login.component';

// update the route array with these
const routes: Routes = [
  {path: 'header', component: HeaderComponent },
  {path: 'body', component: BodyComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'side-menu', component: SideMenuComponent },
  {path: 'main-area', component: MainAreaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
