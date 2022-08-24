import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Admin Dashboard Component Loaded !!!');
    
  }

}
