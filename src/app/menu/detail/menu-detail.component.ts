import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuDetailComponent implements OnInit {
  menu: Menu = {
    id: 1,
    name: 'My Menu',
    description: 'Healthy menu for healthy people'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
