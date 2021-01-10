import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllTicketComponent } from './all-ticket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTicketRoutingModule } from './all-ticket-routing.module';
import { PageHeaderModule } from 'src/app/shared';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [AllTicketComponent],
  imports: [
    CommonModule,
    AllTicketRoutingModule,
    PageHeaderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    // BrowserAnimationsModule
  ]
})
export class AllTicketModule { }
