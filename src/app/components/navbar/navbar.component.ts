import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuRef')
  menuRef!: ElementRef;
  menuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    if (this.isUserLogged()) {
      this.menuOpened = !this.menuOpened;
    }
  }

  isUserLogged() {
    let userLogged = sessionStorage.getItem('userLogged');
    return userLogged == 'true';
  }
}
