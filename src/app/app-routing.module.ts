import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuListComponent} from "./menu/list/menu-list.component";
import {MenuDetailComponent} from "./menu/detail/menu-detail.component";

const routes: Routes = [
  { path: 'menus', component: MenuListComponent },
  { path: 'menu', component: MenuDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
