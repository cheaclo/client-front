import { AccountDataPipe } from './../../pipes/account-data.pipe';
import { UserService } from './../../services/user.service';
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
  SAME_PASSWORD = "New password must be different";
  REPEAT_PASSWORD = "Repeated password must match the new one";
  PASSWORD_CONSTRAINTS = "Allowed password between 5 and 30";

  editFields = false;
  countries: string[] = [];
  formInputs: FormInputs = new FormInputs();
  user!: User;
  deletePopupVisible = false;
  changePasswordPopupVisible = false;
  passwordErrorMessage = "";

  password = "";
  newPassword = "";
  newPasswordRepeat = "";
  changePasswordSuccess = false;

  constructor(private signUpService: SignUpService,
              private router: Router,
              private userService: UserService) {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (this.user === null) {
      router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.signUpService.getCountires()
    .subscribe(countries => this.countries = countries);
  }

  ngShowDeletePopup(): void {
    this.deletePopupVisible = true;
  }

  ngShowPasswordPopup(): void {
    this.changePasswordPopupVisible = true;
  }

  ngEditAccount(): void {
    this.editFields = true;
    this.initForm();
  }

  ngSaveAccountChanges(): void {
    let valid = this.formInputs.validFields();
    if (valid) {
      this.userService.editUserAll(this.getEditAllRequestBody())
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.user = response.user;
          sessionStorage.setItem('user', JSON.stringify(this.user));
        }
        this.editFields = false;
      })
    }
  }

  ngCancelAccountChanges(): void {
    this.editFields = false;
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

  ngDeleteAccountNo(): void {
    this.deletePopupVisible = false;
  }

  ngDeleteAccountYes(): void {
    this.userService.deleteUser(this.user.id);
    this.deletePopupVisible = false;
    sessionStorage.setItem('userLogged', 'false');
    sessionStorage.setItem('user', 'null');
    this.router.navigateByUrl('/sign-in');
  }

  ngChangePassword(): void {
    if (this.password === this.newPassword) {
      this.passwordErrorMessage = this.SAME_PASSWORD;
    } else if (!(this.newPassword.length >= 5 && this.newPassword.length <= 30)) {
      this.passwordErrorMessage = this.PASSWORD_CONSTRAINTS;
    } else if (this.newPassword !== this.newPasswordRepeat) {
      this.passwordErrorMessage = this.REPEAT_PASSWORD;
    } else {
      this.userService.editUserPassword(this.user.id, this.user.accountInfo.email, this.newPassword)
      .subscribe(response => {
        if (response.success)  {
          this.changePasswordSuccess = true;
          setTimeout(() => this.changePasswordPopupVisible = false, 2000);
          this.user = response.user;
          sessionStorage.setItem('user', JSON.stringify(this.user));
        }
        else {
          this.passwordErrorMessage = response.message;
        }
      });
    }
  }

  ngCancelPasswordChanging(): void {
    this.changePasswordPopupVisible = false;
  }

  initForm(): void {
    this.formInputs.checkPassword = false;
    this.formInputs.showExtraInfo = true;
    this.formInputs.firstname.value = this.user.accountInfo.firstname;
    this.formInputs.lastname.value = this.user.accountInfo.lastname;
    this.formInputs.email.value = this.user.accountInfo.email;
    this.formInputs.gender.value = this.user.accountInfo.gender == null ? '' : this.user.accountInfo.gender.toUpperCase();
    this.formInputs.birthday.value = this.user.accountInfo.birthdayDate == null ? '' : this.user.accountInfo.birthdayDate.toString().slice(0, 10);
    this.formInputs.street.value = this.user.accountInfo.address.street;
    this.formInputs.streetNumber.value = this.user.accountInfo.address.streetNumber;
    this.formInputs.city.value = this.user.accountInfo.address.city;
    this.formInputs.postalCode.value = this.user.accountInfo.address.postalCode;
    this.formInputs.country.value = this.user.accountInfo.address.country;
    this.formInputs.phoneNumber.value = this.user.accountInfo.phone;
  }

  getEditAllRequestBody(): any {
    return {
      userId: this.user.id,
      email: this.user.accountInfo.email,
      newFirstname: this.formInputs.firstname.value,
      newLastname: this.formInputs.lastname.value,
      newEmail: this.formInputs.email.value,
      newGender: this.formInputs.gender.value == null ? null : this.formInputs.gender.value.toUpperCase(),
      newBirthday: this.formInputs.birthday.value,
      newStreet: this.formInputs.street.value,
      newStreetNumber: Number.parseInt(this.formInputs.streetNumber.value),
      newCity: this.formInputs.city.value,
      newPostalCode: this.formInputs.postalCode.value,
      newCountry: this.formInputs.country.value,
      newPhone: this.formInputs.phoneNumber.value,
    }
  }
}
