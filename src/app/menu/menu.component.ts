import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>;
  currentMenuId: number = 1;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard', 'glyphicon glyphicon-home'),
      new Menu(2, '股票管理', 'stock', 'glyphicon glyphicon-briefcase')
    ]
  }

  nav(menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string,
              public icon: string) {
  }
}
