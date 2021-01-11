import { Injectable } from '@angular/core';
import { TICKET } from './../data/ticket-mock';
import { Ticket } from './../models/ticket.model';
@Injectable()
export class TicketService {

    ticketList: Ticket[] = TICKET;

constructor() { }

    getTickets() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { res: this.ticketList };
            resolve(data);
        }, 2000);
        });
    }
    
}