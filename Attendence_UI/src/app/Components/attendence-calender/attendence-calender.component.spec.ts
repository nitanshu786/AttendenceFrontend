import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceCalenderComponent } from './attendence-calender.component';

describe('AttendenceCalenderComponent', () => {
  let component: AttendenceCalenderComponent;
  let fixture: ComponentFixture<AttendenceCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendenceCalenderComponent]
    });
    fixture = TestBed.createComponent(AttendenceCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
