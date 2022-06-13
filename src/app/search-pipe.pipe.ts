import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(prods:[],pSearch:String):any {
    if(!prods)
    return[];
    if(!pSearch)
    return prods;
  }

}