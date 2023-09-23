import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceBootomSheetComponent } from './attendence-bootom-sheet.component';

describe('AttendenceBootomSheetComponent', () => {
  let component: AttendenceBootomSheetComponent;
  let fixture: ComponentFixture<AttendenceBootomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendenceBootomSheetComponent]
    });
    fixture = TestBed.createComponent(AttendenceBootomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
