import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(): void {
    sessionStorage.setItem('userLogged', 'false');
    sessionStorage.setItem('user', 'null');
    sessionStorage.setItem('cart', JSON.stringify([]));
  }
}
