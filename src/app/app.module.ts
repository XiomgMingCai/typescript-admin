import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from "@angular/router";
import { GashboardComponent } from './gashboard/gashboard.component';

const routeConfig: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard',  component: GashboardComponent},
  {path: 'stock',  component: StockManageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    HeaderComponent,
    StockManageComponent,
    StarsComponent,
    GashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
