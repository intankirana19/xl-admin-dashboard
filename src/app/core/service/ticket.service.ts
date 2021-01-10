import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/internal/Observable';
import { TICKET } from '../models/ticket-mock';
@Injectable()

export class AdventureTimeService {
constructor() { }

    getTickets(): Observable<any[]>{
        return Observable.of(TICKET).delay(100);
    }
    
}