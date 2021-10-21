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

  ngOnFieldChange(): void {
    this.clearErrorMessages();
    this.formInputs.validFields();
  }

  ngSubmit(): void {
    let valid = this.formInputs.validFields();
    if (valid) {
      this.signUpService.signUp(this.formInputs.getSingUpRequestBody())
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

  clearErrorMessages(): void {
    for (let input of this.formInputs.formFields) {
      input.valid = true;
      input.currentMessage = "";
    }
  }
}
