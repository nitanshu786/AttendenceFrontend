import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Classes/login';
import { navigateUrl } from 'src/app/Common/APIUrls';
import { RegisterService } from 'src/app/Services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  logs: Login = new Login();
  session: any;
  constructor(private RegisterService: RegisterService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.maxLength(40)]],
      password: ['', Validators.required]
    });

  }

  login() {
    Swal.fire({
      title: 'Please wait!',
      customClass: '.swal2-progresssteps',
      timerProgressBar: true,
      timer: 15000,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    this.RegisterService.LoginService(this.logs).subscribe(
      (response) => {
        this.session = localStorage.getItem(this.RegisterService.UserId)
        const data = JSON.parse(this.session)
        Swal.close();
        Swal.fire({
          title: `🎉 Welcome ${data.email}! 🎊`,
          text: 'You have successfully logged in.',
          confirmButtonText: 'Ok',
          showClass: {
            popup: 'swal2-noanimation',
            backdrop: 'swal2-noanimation'
          },
          hideClass: {
            popup: '',
            backdrop: ''
          }
        });
        this.logs.email = "";
        this.logs.passwordHash = "";
      
      },
      (error) => {
        debugger
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: `${error.error.Message}`,
          confirmButtonText: 'Ok'
        }
        )
      })
  }

}
