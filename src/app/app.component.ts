import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  options:String[]=["dazler","kajal","amazon"]
  // constructor(private dService:DataService){

  // }
  title = 'angproject';
  prod1:string[]=[];
  prod2:string[]=[];


  prodList:String[]=[];

  ngOnInit(): void {
    if(localStorage.getItem('items')){
    this.prodList=JSON.parse(localStorage.getItem('items')!)
    }
  }
  //  buy(){
  //   window.alert("Specify your brand name  under Specify");
  //  }
}
