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
  birthdayError = "";
  countryError = "";
  phoneNumberError = "";
  streetNameError = "";
  streetNumberError = "";
  cityNameError = "";
  postalCodeError = "";


  constructor() { }

  ngOnInit(): void {
  }

}
