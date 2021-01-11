import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/models/ticket.model';
import { TicketService } from 'src/app/core/service/ticket.service';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.scss']
})
export class MyTicketComponent implements OnInit {
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
