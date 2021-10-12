import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  firstnameValid = true;
  lastnameValid = true;
  emailValid = true;
  passwordValid = true;
  repeatPasswordValid = true;
  countryValid = true;
  phoneNumberValid = true;
  streetNameValid = true;
  streetNumberValid = true;
  cityNameValid = true;
  postalCodeValid = true;
  birthdayValid = true;

  firstnameErrorMessage = "";
  lastnameErrorMessage = "";
  emailErrorMessage = "";
  passwordErrorMessage = "";
  repeatPasswordErrorMessage = "";
  countryErrorMessage = "";
  phoneNumberErrorMessage = "";
  streetNameErrorMessage = "";
  streetNumberErrorMessage = "";
  cityNameErrorMessage = "";
  postalCodeErrorMessage = "";
  birthdayErrorMessage = "";

  showExtraInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExtraInfo() {
    this.showExtraInfo = !this.showExtraInfo;
  }
}
