import { MyTicketComponent } from './my-ticket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketRoutingModule } from './my-ticket-routing.module';
import { PageHeaderModule } from 'src/app/shared';


@NgModule({
  declarations: [MyTicketComponent],
  imports: [
    CommonModule,
    MyTicketRoutingModule,
    PageHeaderModule
  ]
})
export class MyTicketModule { }
