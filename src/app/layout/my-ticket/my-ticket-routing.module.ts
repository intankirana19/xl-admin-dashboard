import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTicketComponent } from './my-ticket.component';


const routes: Routes = [
  {
    path: '',
    component: MyTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTicketRoutingModule { }
