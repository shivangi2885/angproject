import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListsecComponent } from './listsec/listsec.component';


const routes: Routes = [
  // {path:'list', component:ListComponent},
  // {path:'listsec', component:ListsecComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponent=[ListComponent,ListsecComponent]
