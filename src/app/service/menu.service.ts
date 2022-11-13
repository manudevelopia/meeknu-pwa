import {Injectable} from "@angular/core";
import {MENUS} from "../menu/mock-menus";
import {Observable, of} from "rxjs";
import {Menu} from "../menu/menu";

@Injectable({providedIn: 'root'})
export class MenuService {

  constructor() {
  }

  getMenu(id: number): Observable<Menu> {
    const menu = MENUS.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(menu);
  }

  getMenus(): Observable<Menu[]> {
    return of(MENUS);
  }
}
