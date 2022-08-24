import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installers',
  templateUrl: './installers.component.html',
  styleUrls: ['./installers.component.css'],
})
export class InstallersComponent implements OnInit {
  formattedaddress: any;
  options = {
    componentRestrictions: {
      country: ['AU'],
    },
  };
  constructor() {}

  ngOnInit() {}

  public AddressChange(address: any) {
    console.log(address);
    
    //setting address from API to local variable
    this.formattedaddress = address.formatted_address;
  }
}
