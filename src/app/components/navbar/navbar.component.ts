import { Router } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuRef')
  menuRef!: ElementRef;
  menuOpened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.menuOpened = false;
  }

  ngOnMenuItemClick(): void {
    this.menuOpened = false;
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

  logout() {
    sessionStorage.setItem('userLogged', 'false');
    sessionStorage.setItem('user', 'null');
    this.router.navigateByUrl('/sign-in');
    this.menuOpened = false;
  }
}
