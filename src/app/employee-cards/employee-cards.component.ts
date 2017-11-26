import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.scss']
})
export class EmployeeCardsComponent implements OnInit {
  employees: Employee[];
  empStatus: string[] = ['Active', 'Resigned', 'Terminated', 'Deceased'];
  constructor(public employeeService: EmployeeService) {
    this.employeeService.emitEmployees.subscribe(employees => this.employees = employees);
  }

  ngOnInit() {
    this.employees = this.employeeService.employees;
  }

  changeStatus(clickedStatus, employee) {
    employee.status = clickedStatus;
  }

  deleteEmployee(employee) {
    this.employeeService.deleteEmployee(employee);
  }

  buttonStatus(status) {
    return status === 'Active' ? 'primary' :
    status === 'Resigned' ? 'accent' : 'warn';
  }
}
