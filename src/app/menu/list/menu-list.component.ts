import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu";
import { MENUS } from "../mock-menus";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = MENUS

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(menu: Menu) {

  }
}
