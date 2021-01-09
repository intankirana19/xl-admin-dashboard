import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTicketComponent } from './all-ticket.component';


const routes: Routes = [
  {
    path: '',
    component: AllTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTicketRoutingModule { }
