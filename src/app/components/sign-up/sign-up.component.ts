import { Router } from '@angular/router';
import { SignUpService } from './../../services/sign-up.service';
import { FormInput } from './../../models/formInput';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  CITY_REGEX = new RegExp(/^\w+[\s*\w*]*$/);
  POSTAL_CODE_REGEX = new RegExp(/^\w{6}$/);

  countries: string[] = [];
  serverMessage = "";
  showExtraInfo = false;

  firstname: FormInput = {
    errorMessage: "Invalid firstname",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: any) => {return val === undefined || !(val.length >= 2 && val.length <= 30)}
  };
  lastname: FormInput = {
    errorMessage: "Invalid lastname",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return val === undefined || !(val.length >= 2 && val.length <= 30)}
  };
  email: FormInput = {
    errorMessage: "Invalid email",
    currentMessage: "",
    valid: true,
    value: "",
    validate:  (val: string) => {return val === undefined || !this.EMAIL_REGEX.test(val)}
  };
  password: FormInput = {
    errorMessage: "Allowed length between 5 and 30",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return val === undefined || !(val.length >= 5 && val.length <= 30)}
  };
  repeatPassword: FormInput = {
    errorMessage: "Passwords have to be the same",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return val === undefined || val !== this.password.value}
  };
  country: FormInput = {
    errorMessage: "Invalid country",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val === 'Country')}
  };
  phoneNumber: FormInput = {
    errorMessage: "Ivalid phone number",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val.length !== 9)}
  };
  street: FormInput = {
    errorMessage: "Invalid street name",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !(val.length >= 3 && val.length <= 50))}
  };
  streetNumber: FormInput = {
    errorMessage: "Allowed number between 1 and 99999",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || Number(val) === NaN || !(Number(val) >= 1 && Number(val) <= 99999))}
  };
  city: FormInput = {
    errorMessage: "Invalid city",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !this.CITY_REGEX.test(val))}
  };
  postalCode: FormInput = {
    errorMessage: "Invalid postal code",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !this.POSTAL_CODE_REGEX.test(val))}
  };
  birthday: FormInput = {
    errorMessage: "Invalid birthday",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {
      let date = new Date(val);
      return this.showExtraInfo == true && (val === undefined || isNaN(Date.parse(val)) || date > new Date());
    }
  };
  gender: FormInput = {
    errorMessage: "Invalid gender",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val === "")}
  };

  formFields: FormInput[] = [
    this.firstname,
    this.lastname,
    this.email,
    this.password,
    this.repeatPassword,
    this.country,
    this.phoneNumber,
    this.street,
    this.streetNumber,
    this.city,
    this.postalCode,
    this.birthday,
    this.gender
  ]

  constructor(private signUpService: SignUpService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpService.getCountires()
    .subscribe(countries => this.countries = countries)
  }

  ngToggleExtraInfo(): void {
    this.showExtraInfo = !this.showExtraInfo;
  }

  ngSubmit(): void {
    let valid = this.validFields();
    if (valid) {
      this.signUpService.signUp(this.getSingUpRequestBody())
      .subscribe(res => {
        if (res.success) {
          sessionStorage.setItem('userLogged', 'true');
          sessionStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigateByUrl('/');
        } else {
          this.serverMessage = res.message;
        }
      })
    }
  }

  validFields(): boolean {
    let valid = true;

    this.clearErrorMessages();

    for (let input of this.formFields) {
      if (input.validate(input.value)) {
        input.valid = false;
        input.currentMessage = input.errorMessage;
        valid = false;
      }
    }

    return valid;
  }

  clearErrorMessages(): void {
    for (let input of this.formFields) {
      input.valid = true;
      input.currentMessage = "";
    }
  }

  getSingUpRequestBody(): any {
    return {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: btoa(this.password.value),
      birthday: this.birthday.value,
      gender: this.gender.value === "" ? null : this.gender.value,
      phone: this.phoneNumber.value,
      street: this.street.value,
      streetNumber: this.streetNumber.value,
      city: this.city.value,
      postalCode: this.postalCode.value,
      country: this.country.value
    }
  }
}
