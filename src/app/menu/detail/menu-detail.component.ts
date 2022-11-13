import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Menu } from "../menu";
import {MenuService} from "../../service/menu.service";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  menu: Menu | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.menuService.getMenu(id).subscribe(menu => this.menu = menu);
  }
}
