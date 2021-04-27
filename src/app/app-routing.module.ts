import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [{path:'home', component:HomeComponent}, {path:'partners', component:PartnersComponent}, {path:'about', component:AboutComponent}, {path:'join', component:JoinComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }