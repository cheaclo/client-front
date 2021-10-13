import { SignInService } from './../../services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  ERROR_EMAIL_MESSAGE = "Provided email is invalid";
  ERROR_PASSOWORD_MESSAGE = "Password has to have length between 5 and 30 characters";

  email!: string;
  validEmail: boolean = true;
  password!: string;
  validPassword: boolean = true;

  signInErrorMessage = '';
  emailErrorMessage = '';
  passwordErrorMessage = '';

  constructor(private signInService: SignInService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngSignIn(): void {
    if (!this.validEmail || !this.validPassword)
      return;

    this.signInService.signIn(this.email, btoa(this.password))
      .subscribe(res => {
        if (res.success) {
          sessionStorage.setItem('userLogged', 'true');
          sessionStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigateByUrl('/');
        } else {
          this.signInErrorMessage = res.message;
          this.passwordErrorMessage = '';
          this.emailErrorMessage = '';
        }
      })
  }

  validation(): boolean {
    return true;
  }

  ngOnEmailChange(): void {
    this.signInErrorMessage = '';
    this.validEmail = this.EMAIL_REGEX.test(this.email);
    this.emailErrorMessage = this.validEmail ? '' : this.ERROR_EMAIL_MESSAGE;
  }

  ngOnPasswordChange(): void {
    this.signInErrorMessage = '';
    this.validPassword = this.password.length >= 5 && this.password.length < 30;
    this.passwordErrorMessage = this.validPassword ? '' : this.ERROR_PASSOWORD_MESSAGE;
  }
}
