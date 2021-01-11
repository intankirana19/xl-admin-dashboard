import { TicketService } from './../../core/service/ticket.service';
import { Ticket } from './../../core/models/ticket.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.scss']
})
export class AllTicketComponent implements OnInit {
  isTicket: boolean;
  isReporter: boolean;
  isCreated: boolean;
  isStatus: boolean;

  tickets: Ticket[] = [];

  constructor(
    private getAllTickets: TicketService,
  ) { }

  ngOnInit() {
    const promise = this.getAllTickets.getTickets();
    promise.then(
      response => {
        this.tickets = response["res"];
      },
      error => {
        console.log("error " + error);
      }
    );
    this.isTicket = false;
    this.isReporter = false;
    this.isCreated = false;
    this.isStatus = false;
  }

  setFilter(e) {
    if ( e === 'ticket') {
      this.isTicket = true;
      this.isReporter = false;
      this.isCreated = false;
      this.isStatus = false;
    } else if ( e === 'reporter') {
      this.isReporter = true;
      this.isTicket = false;
      this.isCreated = false;
      this.isStatus = false;
    } else if ( e === 'created') {
      this.isCreated = true;
      this.isReporter = false;
      this.isTicket = false;
      this.isStatus = false;
    } else if (e === 'status') {
      this.isStatus = true;
      this.isCreated = false;
      this.isReporter = false;
      this.isTicket = false;
    } else {
      this.isStatus = false;
      this.isCreated = false;
      this.isReporter = false;
      this.isTicket = false;
    }
  }

}
