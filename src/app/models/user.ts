export interface User {
  id: number;
  createDate: Date;
  accountInfo: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    birthdayDate: Date;
    gender: string;
    phone: string;
    address: {
      id: number;
      street: string;
      streetNumber: string;
      city: string;
      postalCode: string;
      country: string;
    }
  }
}
