import { MyTicketComponent } from './my-ticket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketRoutingModule } from './my-ticket-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [MyTicketComponent],
  imports: [
    CommonModule,
    MyTicketRoutingModule,
    PageHeaderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class MyTicketModule { }
