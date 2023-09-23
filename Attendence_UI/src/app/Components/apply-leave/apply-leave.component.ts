import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent {
  leaveForm: FormGroup;
  selectedFileName?: string;

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
      cc:['',Validators.required],
      to:['',Validators.required],
      attachment: null // Initialize attachment as null
    });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      // Submit the form data to your backend or perform the desired action here
      console.log(this.leaveForm.value);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.leaveForm.get('attachment')!.setValue(file);
    this.selectedFileName = file ? file.name : 'No file selected';
  }
}
