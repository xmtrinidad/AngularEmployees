import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../models/sidenav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavItems: SidenavItem[] = [
    { icon: 'remove_red_eye', title: 'Overview'},
    { icon: 'person', title: 'Employees'},
    { icon: 'stars', title: 'Overview'},
    { icon: 'business', title: 'Departments'},
    { icon: 'announcement', title: 'Announcements'},
    { icon: 'insert_chart', title: 'Reporting'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
