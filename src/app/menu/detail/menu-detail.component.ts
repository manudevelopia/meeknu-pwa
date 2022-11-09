import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
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
