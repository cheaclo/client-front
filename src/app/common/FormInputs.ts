import { trigger } from "@angular/animations";
import { FormInput } from "../models/formInput";

export class FormInputs {
  EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  CITY_REGEX = new RegExp(/^\w+[\s*\w*]*$/);
  POSTAL_CODE_REGEX = new RegExp(/^\w{6}$/);

  showExtraInfo = false;
  checkPassword = true;

  firstname: FormInput = {
    errorMessage: "Invalid firstname",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: any) => {return val === undefined || !(val.length >= 2 && val.length <= 30)},
    required: true
  };
  lastname: FormInput = {
    errorMessage: "Invalid lastname",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return val === undefined || !(val.length >= 2 && val.length <= 30)},
    required: true
  };
  email: FormInput = {
    errorMessage: "Invalid email",
    currentMessage: "",
    valid: true,
    value: "",
    validate:  (val: string) => {return val === undefined || !this.EMAIL_REGEX.test(val)},
    required: true
  };
  password: FormInput = {
    errorMessage: "Allowed length between 5 and 30",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.checkPassword && (val === undefined || !(val.length >= 5 && val.length <= 30))},
    required: true
  };
  repeatPassword: FormInput = {
    errorMessage: "Passwords have to be the same",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.checkPassword && (val === undefined || val !== this.password.value)},
    required: true
  };
  country: FormInput = {
    errorMessage: "Invalid country",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val === 'Country')},
    required: false
  };
  phoneNumber: FormInput = {
    errorMessage: "Ivalid phone number",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val.length !== 9)},
    required: false
  };
  street: FormInput = {
    errorMessage: "Invalid street name",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !(val.length >= 3 && val.length <= 50))},
    required: false
  };
  streetNumber: FormInput = {
    errorMessage: "Allowed number between 1 and 99999",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || Number(val) === NaN || !(Number(val) >= 1 && Number(val) <= 99999))},
    required: false
  };
  city: FormInput = {
    errorMessage: "Invalid city",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !this.CITY_REGEX.test(val))},
    required: false
  };
  postalCode: FormInput = {
    errorMessage: "Invalid postal code",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || !this.POSTAL_CODE_REGEX.test(val))},
    required: false
  };
  birthday: FormInput = {
    errorMessage: "Invalid birthday",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {
      let date = new Date(val);
      return this.showExtraInfo == true && (val === undefined || isNaN(Date.parse(val)) || date > new Date());
    },
    required: false
  };
  gender: FormInput = {
    errorMessage: "Invalid gender",
    currentMessage: "",
    valid: true,
    value: "",
    validate: (val: string) => {return this.showExtraInfo == true && (val === undefined || val === "")},
    required: false
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

  validFields(): boolean {
    let valid = true;

    for (let input of this.formFields) {
      if (input.validate(input.value)) {
        input.valid = false;
        input.currentMessage = input.errorMessage;
        valid = false;
      }
    }

    return valid;
  }
}
