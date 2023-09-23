import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintaskpanelComponent } from './admintaskpanel.component';

describe('AdmintaskpanelComponent', () => {
  let component: AdmintaskpanelComponent;
  let fixture: ComponentFixture<AdmintaskpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmintaskpanelComponent]
    });
    fixture = TestBed.createComponent(AdmintaskpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
