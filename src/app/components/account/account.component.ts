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
