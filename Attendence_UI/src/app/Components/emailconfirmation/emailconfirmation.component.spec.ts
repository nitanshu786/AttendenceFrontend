import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailconfirmationComponent } from './emailconfirmation.component';

describe('EmailconfirmationComponent', () => {
  let component: EmailconfirmationComponent;
  let fixture: ComponentFixture<EmailconfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailconfirmationComponent]
    });
    fixture = TestBed.createComponent(EmailconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
