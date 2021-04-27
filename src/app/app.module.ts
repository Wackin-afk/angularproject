import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    AboutComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
