import { Component } from '@angular/core';
import { Register } from 'src/app/Classes/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Classes/login';
import { RegisterService } from 'src/app/Services/register.service';
import Swal from 'sweetalert2'
import { BaseRouting, navigateUrl } from 'src/app/Common/APIUrls';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm!: FormGroup
  register: Register = new Register();

  constructor(private RegisterService: RegisterService, private route: Router, private formBuilder: FormBuilder) { }

  get passwords() { return this.registrationForm.get('passwords') }
  get confirmPassword() { return this.registrationForm.get('confirmPassword') }


  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email,Validators.maxLength(40)]],
      passwords: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern(/^(?=.*[@#$%&]).*$/)]],
      confirmPassword: ['', Validators.required]
    });
  }

  passwordsMatch(): boolean {
    const password = this.registrationForm?.get('passwords')?.value;
    const confirm = this.registrationForm?.get('confirmPassword')?.value;
    return password === confirm;
  }

  Register() {
    Swal.fire({
      title: 'Please wait!',
      customClass: '.swal2-progresssteps',
      timerProgressBar: true,
      timer: 15000,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    debugger
    this.RegisterService.Registerservice(this.register).subscribe(
      (response) => {
        Swal.close();
        this.route.navigate([navigateUrl.VerifyEmail]);
        this.register.username = "";
        this.register.email = "";
        this.register.passwordHash = "";
        this.register.confirm = "";
      },
      (error) => {
        debugger
        console.log(error);
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: `${error.error.Message}`,
          confirmButtonText: 'Ok'
        });

      }

    )
  }
}
