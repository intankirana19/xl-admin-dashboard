import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LayoutComponent,HeaderComponent, SidebarComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule, 
    NgbDropdownModule,
    // BrowserAnimationsModule
  ]
})
export class LayoutModule { }
