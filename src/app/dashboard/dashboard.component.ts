import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeComponent);
  }

}
