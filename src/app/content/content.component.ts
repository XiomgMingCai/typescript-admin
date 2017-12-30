import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log(event);
        if (event.url.startsWith("/dashboard")) {
          this.pageTitle = '首页';
          this.setPageTitle('首页')
          this.pageDesc = 'welcome to admin';
        } else if (event.url.startsWith("/stock")) {
          this.pageTitle = '股票管理';
          this.setPageTitle('股票管理')
          this.pageDesc = '对股票的增删改查! ';
        } else {
          this.pageTitle = '抱歉没知道页面';
          this.pageDesc = ''
        }
      })
  }

  ngOnInit() {
  }
  setPageTitle(title:string){
    document.getElementsByTagName('title')[0].innerText = title
  }
}
