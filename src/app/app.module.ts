import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDetailComponent } from "./menu/detail/menu-detail.component";
import { MenuListComponent } from "./menu/list/menu-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuDetailComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
