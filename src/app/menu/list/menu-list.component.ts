import {Component, OnInit} from '@angular/core';
import {Menu} from "../menu";
import {MenuService} from "../../service/menu.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] | [] |undefined;

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe(menus => this.menus = menus);
  }
}
