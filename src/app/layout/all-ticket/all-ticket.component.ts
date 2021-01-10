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

  ticket: TICKET;

  constructor() { }

  ngOnInit() {
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
