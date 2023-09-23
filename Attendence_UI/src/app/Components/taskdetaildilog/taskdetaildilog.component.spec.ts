import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetaildilogComponent } from './taskdetaildilog.component';

describe('TaskdetaildilogComponent', () => {
  let component: TaskdetaildilogComponent;
  let fixture: ComponentFixture<TaskdetaildilogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskdetaildilogComponent]
    });
    fixture = TestBed.createComponent(TaskdetaildilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
