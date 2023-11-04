import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: UntypedFormGroup;
  passwordError: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value).then(
      res => {
        // console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
        this.passwordError = true;
      }
    );
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then((res) => {
        console.log(res);
        this.router.navigate(['home']);
      }).catch((err) => {
        console.log(err);
      });
  }
}
