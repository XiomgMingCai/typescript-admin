import {Injectable} from '@angular/core';

@Injectable()
export class StackService {
  constructor() {
  }
  getStock(){
    return new Stock(1,'IBM')
  }
}

export class Stock {
  constructor(public id:number,public name:string){

  }
}
