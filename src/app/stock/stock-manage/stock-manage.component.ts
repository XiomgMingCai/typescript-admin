import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第1只股票', 100, 2.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(2, '第2只股票', 200, 2.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(3, '第3只股票', 300, 3.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(4, '第4只股票', 400, 4.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(5, '第5只股票', 500, 3.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(6, '第6只股票', 600, 1.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(7, '第7只股票', 700, 2.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(8, '第8只股票', 800, 3.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(9, '第9只股票', 900, 4.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(10, '第10只股票', 1000, 3.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
      new Stock(11, '第11只股票', 1100, 3.5, '这是阿里巴巴的股票', ['互联网', 'IT', '电商']),
    ]
  }
}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,//评级
              public desc: string,//
              public categories: Array<string>) {
  }
}
