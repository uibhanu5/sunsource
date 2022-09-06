import { Routes } from '@angular/router';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService, Maps } from '../services/location.service';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { RequestEnums } from 'src/app/shared/constants/constants/request-enums';

@Component({
  selector: 'app-installers',
  templateUrl: './installers.component.html',
  styleUrls: ['./installers.component.css']
})
export class InstallersComponent implements OnInit {


  @ViewChild('search')
  public searchElementRef: any;
  searchLocation: any = '';


  constructor(private router: Router, private loginService: LocationService, private ngZone: NgZone,
    private commonRequestService: CommonRequestService) {
    this.loginService.api.then((maps) => {
      this.initAutocomplete(maps);
    });
  }

  initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
      });
    });
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchLocation = this.searchElementRef.nativeElement.value;
    const requestPayload = { ...this.searchLocation };
    this.commonRequestService
      .request(RequestEnums.SEARCH, requestPayload)
      .subscribe((response) => {
        console.log(response);
      });
  }

  btnClick=  () => {
    this.router.navigateByUrl('/views/availability');
}
  // routerLink="/views/availability"
}
