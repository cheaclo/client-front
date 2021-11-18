import { FormInputs } from './../../common/FormInputs';
import { Router } from '@angular/router';
import { SignUpService } from './../../services/sign-up.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  countries: string[] = [];
  serverMessage = "";
  formInputs: FormInputs = new FormInputs();

  constructor(private signUpService: SignUpService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpService.getCountires()
    .subscribe(countries => this.countries = countries)
  }

  ngToggleExtraInfo(): void {
    this.formInputs.showExtraInfo = !this.formInputs.showExtraInfo;
  }

  ngOnFieldChange(field: any): void {
    field.valid = true;
    field.currentMessage = "";

    if (field.validate(field.value)) {
      field.valid = false;
      field.currentMessage = field.errorMessage;
      field = false;
    }
  }

  ngSubmit(): void {
    let valid = this.formInputs.validFields();
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

  getSingUpRequestBody(): any {
    return {
      firstname: this.formInputs.firstname.value,
      lastname: this.formInputs.lastname.value,
      email: this.formInputs.email.value,
      password: btoa(this.formInputs.password.value),
      birthday: this.formInputs.birthday.value,
      gender: this.formInputs.gender.value === "" ? null : this.formInputs.gender.value.toUpperCase(),
      phone: this.formInputs.phoneNumber.value,
      street: this.formInputs.street.value,
      streetNumber: this.formInputs.streetNumber.value,
      city: this.formInputs.city.value,
      postalCode: this.formInputs.postalCode.value,
      country: this.formInputs.country.value
    }
  }
}
