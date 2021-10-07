export interface User {
  id: Number;
  createDate: Date;
  accountInfo: {
    id: Number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    birthdayDate: Date;
    gender: string;
    phone: string;
    address: {
      id: Number;
      street: string;
      streetNumber: string;
      city: string;
      postalCode: string;
      country: string;
    }
  }
}
