import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  @ViewChild('emailErrorMessage') emailErrorMessage!: ElementRef;
  @ViewChild('passwordErrorMessage') passwordErrorMessage!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngSignIn(): void {
  }

  validation(): boolean {
    return true;
  }

  ngOnEmailChange(): void {
    this.validEmail = this.EMAIL_REGEX.test(this.email);
    let errorMessage = this.validEmail ? '' : this.ERROR_EMAIL_MESSAGE;
    this.renderer.setProperty(this.emailErrorMessage.nativeElement, 'innerHTML', errorMessage);
  }

  ngOnPasswordChange(): void {
    this.validPassword = this.password.length >= 5 && this.password.length < 30;
    let errorMessage = this.validPassword ? '' : this.ERROR_PASSOWORD_MESSAGE;
    this.renderer.setProperty(this.passwordErrorMessage.nativeElement, 'innerHTML', errorMessage);
  }
}
