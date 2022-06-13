import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  p1:String[]=["dazler","kajal","amazon"]
  p2:string[]=["eyetax","bindi","flipkart"]

  getP1(){
    console.log(this.p1);
    return this.p1;
  }
  getP2(){
    return this.p2;
  }
}
