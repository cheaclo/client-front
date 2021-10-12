import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  firstnameError = "";
  lastnameError = "";
  emailError = "";
  passwordError = "";
  repeatPasswordError = "";
  birthdayError = "Birthday error";
  countryError = "";
  phoneNumberError = "";
  streetNameError = "";
  streetNumberError = "";
  cityNameError = "";
  postalCodeError = "";

  showExtraInfo = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExtraInfo() {
    this.showExtraInfo = !this.showExtraInfo;
  }
}
