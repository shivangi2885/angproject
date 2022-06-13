import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listsec',
  templateUrl: './listsec.component.html',
  styleUrls: ['./listsec.component.css']
})
export class ListsecComponent implements OnInit {
@Input() prods:any;
pSearch:String='';

  constructor() { }

  ngOnInit(): void {
  }
discard(index:number){
  this.prods.splice(index,1)
  localStorage.setItem('items',JSON.stringify(this.prods))
}


}
