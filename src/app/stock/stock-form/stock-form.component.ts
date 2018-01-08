import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock:Stock
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, '第1只股票', 100, 2.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商'])
  }

}
