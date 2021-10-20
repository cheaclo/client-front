import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user === null) {
    router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

}
