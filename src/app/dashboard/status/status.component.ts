import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

interface Status {
  title: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: Status[] = [
    {title: 'All', value: 'All', checked: true},
    {title: 'Active', value: 'Active', checked: false},
    {title: 'Terminated', value: 'Terminated', checked: false},
    {title: 'Deceased', value: 'Deceased', checked: false},
    {title: 'Resigned', value: 'Resigned', checked: false},
    {title: 'Trash', value: 'Trash', checked: false},
  ];

  statSelected: Status = this.status[0];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  statusClicked(status) {
    if (this.statSelected === status) {
      return;
    }
    this.statSelected.checked = false;
    this.statSelected = status;
    this.statSelected.checked = this.statSelected.checked !== true;
    this.employeeService.statusChanged(status);
  }

}
