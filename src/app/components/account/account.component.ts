import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  editFirstname = false;
  editLastname = false;
  editEmail = false;
  editPassword = false;
  editGender = false;
  editBirthday = false;
  editStreetName = false;
  editStreetNumber = false;
  editCityName = false;
  editPostalCode = false;
  editCountry = false;
  editPhoneNumber = false;

  constructor(private router: Router) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    // if (user === null) {
    //   router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
  }

}
