import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskDropComponent } from './all-task-drop.component';

describe('AllTaskDropComponent', () => {
  let component: AllTaskDropComponent;
  let fixture: ComponentFixture<AllTaskDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTaskDropComponent]
    });
    fixture = TestBed.createComponent(AllTaskDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
