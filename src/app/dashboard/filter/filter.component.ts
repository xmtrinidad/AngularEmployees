import { Component, OnInit } from '@angular/core';
import { JOB_TITLES } from '../../models/mock-employees';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterItems = JOB_TITLES;
  selectedTitle: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  selected() {
    this.employeeService.filterEmployeesTitle(this.selectedTitle);
  }

}
