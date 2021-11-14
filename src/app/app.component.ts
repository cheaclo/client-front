import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // testUser = '{"id":6,"createDate":"2021-09-23T16:51:03.451+00:00","accountInfo":{"id":6,"firstname":"Piotr","lastname":"Kalota","email":"random@gmail.com","password":"cGFzc3dvcmQ=","birthdayDate":"1999-04-23T00:00:00.000+00:00","gender":"MAN","phone":"222333111","address":{"id":6,"street":"Cambell","streetNumber":57,"city":"York City","postalCode":"Y010ET","country":"United Kingdom"}}}';

  ngOnInit(): void {
    sessionStorage.setItem('userLogged', 'false');
    sessionStorage.setItem('user', '{}');
    sessionStorage.setItem('cart', JSON.stringify([]));
  }
}
