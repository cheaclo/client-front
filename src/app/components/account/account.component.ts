import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  editFields = true;
  countries: string[] = [];

  constructor(private signUpService: SignUpService,
              private router: Router) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    // if (user === null) {
    //   router.navigate(['/']);
    // }
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
}
