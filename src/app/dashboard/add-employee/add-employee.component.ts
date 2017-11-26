import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DashboardComponent } from '../dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../employee.service';
import { JOB_TITLES } from '../../models/mock-employees';



interface EmployeeResponse {
  results: string[];
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  jobTitles = JOB_TITLES; // Get job titles to fill select list
  name: string;
  title: string;
  results: string[];

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.jobTitles.shift(); // Remove 'All' from add employee list
    // API call to Random User API for getting an image
    this.http.get<EmployeeResponse>('https://randomuser.me/api/').subscribe(data => {
      this.results = data.results;
    });
  }

  /**
   * Create a new employee and submit to employee service
   */
  submitEmployee() {
    const api: any = this.results[0];
    const employee: Employee = {
      img: api.picture.medium,
      name: this.name ? this.name : 'New Employee',
      title: this.title ? this.title : 'Unassigned',
      status: 'Active'
    };
    this.employeeService.addEmployee(employee);
  }

}
