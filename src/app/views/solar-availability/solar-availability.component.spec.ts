import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarAvailabilityComponent } from './solar-availability.component';

describe('SolarAvailabilityComponent', () => {
  let component: SolarAvailabilityComponent;
  let fixture: ComponentFixture<SolarAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
