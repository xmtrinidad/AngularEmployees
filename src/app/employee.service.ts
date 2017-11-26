import { Injectable, Output, EventEmitter } from '@angular/core';
import { EMPLOYEES } from './models/mock-employees';
import { Employee } from './models/employee';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {
  employees: Employee[] = EMPLOYEES;
  currentStatus = 'All';
  @Output() emitEmployees = new EventEmitter<Employee[]>();
  constructor() { }

  /**
   * Push new employee into array of employees
   * @param employee - the new employee
   */
  addEmployee(employee: Employee) {
    this.employees.push(employee);
    if (this.currentStatus === 'All') {
      this.emitEmployees.emit(this.employees);
    } else {
      this.filterEmployeesStatus(employee);
    }
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
    this.filterEmployeesStatus(employee);
  }

  statusChanged(status) {
    this.currentStatus = status.title;
    if (status.title === 'All') {
      this.emitEmployees.emit(this.employees);
      return;
    }
    const employees = this.employees.filter(employee => employee.status === status.value);
    this.emitEmployees.emit(employees);
  }

  /**
   * Filter the array of employees based on currently selected status
   * and emit change
   * @param emp - the employee object passed in
   */
  filterEmployeesStatus(emp) {
    const filteredEmployees = this.employees.filter(e => emp.status === e.status);
    this.emitEmployees.emit(filteredEmployees);
  }

  filterEmployeesTitle(selected) {
    if (selected === 'All Employees') {
      this.emitEmployees.emit(this.employees);
      return;
    }
    const filteredEmployees = this.employees.filter(e => selected === e.title);
    this.emitEmployees.emit(filteredEmployees);
  }



}
