import { Ticket } from '../models/ticket.model';

export const TICKET: Ticket[] = [
  { id: 'ABC010', name: 'Bronet Axis', reporter: 'Ikhsan', create_date: '4/9/2020', status: 'LOW', activity: 'Initial Ticket', prod_stream: 'AXIS', action: ''},
  { id: 'ABC011', name: 'Sisnet Axis', reporter: 'Sunarto', create_date: '1/6/2020', status: 'LOW', activity: 'Approved by BRM', prod_stream: 'PREPAID', action: ''},
  { id: 'ABC012', name: 'Internet Axis', reporter: 'Sunardi', create_date: '2/9/2020', status: 'MEDIUM', activity: 'Waiting Approval', prod_stream: 'POSTPAID', action: ''},
  { id: 'ABC013', name: 'Gamers Package', reporter: 'Sunjaya', create_date: '19/7/2020', status: 'HIGH', activity: 'Withdrew by BRM', prod_stream: 'VAS', action: ''},
];