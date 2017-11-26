import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeCardsComponent } from './employee-cards/employee-cards.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterComponent } from './dashboard/filter/filter.component';
import { StatusComponent } from './dashboard/status/status.component';
import { FooterComponent } from './footer/footer.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';

import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeCardsComponent,
    SidenavComponent,
    DashboardComponent,
    FilterComponent,
    StatusComponent,
    FooterComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [AddEmployeeComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
