import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'all-ticket', pathMatch: 'prefix' },
        // {
        //     path: 'dashboard',
        //     loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
        // },
        { path: 'all-ticket', loadChildren: () => import('./all-ticket/all-ticket.module').then((m) => m.AllTicketModule) },
        { path: 'my-ticket', loadChildren: () => import('./my-ticket/my-ticket.module').then((m) => m.MyTicketModule) },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
