import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormInputs } from 'src/app/common/FormInputs';
import { User } from 'src/app/models/user';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  editFields = false;
  countries: string[] = [];
  formInputs: FormInputs = new FormInputs();
  user!: User;

  constructor(private signUpService: SignUpService,
              private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (this.user === null) {
      router.navigate(['/']);
    }
    this.initForm();
  }

  ngOnInit(): void {
    this.signUpService.getCountires()
    .subscribe(countries => this.countries = countries);
  }

  ngDeleteAccount(): void {

  }

  ngEditAccount(): void {
    this.editFields = true;
  }

  ngSaveAccountChanges(): void {

  }

  ngCancelAccountChanges(): void {
    this.editFields = false;
  }

  initForm(): void {
    this.formInputs.firstname.value = this.user.accountInfo.firstname;
    this.formInputs.lastname.value = this.user.accountInfo.lastname;
    this.formInputs.email.value = this.user.accountInfo.email;
    this.formInputs.gender.value = this.user.accountInfo.gender;
    this.formInputs.birthday.value = this.user.accountInfo.birthdayDate.toString().slice(0, 10);
    this.formInputs.street.value = this.user.accountInfo.address.street;
    this.formInputs.streetNumber.value = this.user.accountInfo.address.streetNumber;
    this.formInputs.city.value = this.user.accountInfo.address.city;
    this.formInputs.postalCode.value = this.user.accountInfo.address.postalCode;
    this.formInputs.country.value = this.user.accountInfo.address.country;
    this.formInputs.phoneNumber.value = this.user.accountInfo.phone;
  }
}
