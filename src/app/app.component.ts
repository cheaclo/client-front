import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //testUser = '{"id":14,"createDate":"2021-11-14T18:33:10.038+00:00","accountInfo":{"id":14,"firstname":"Jack","lastname":"Jackson","email":"jack@gmail.com","password":"cGFzc3dvcmQ=","birthdayDate":"2021-11-03T00:00:00.000+00:00","gender":"MAN","phone":"222333444","address":{"id":14,"street":"safasf","streetNumber":45,"city":"asfasf","postalCode":"222222","country":"belgium"}}}';

  ngOnInit(): void {
    sessionStorage.setItem('userLogged', 'false');
    sessionStorage.setItem('user', '{}');
  }
}
