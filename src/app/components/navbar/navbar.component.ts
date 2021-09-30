import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuRef')
  menuRef!: ElementRef;

  menuClass = 'menu-closed';
  menuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    if (this.menuOpened)
      this.menuClass = 'menu-closed';
    else
      this.menuClass = 'menu-opened';
    this.menuOpened = !this.menuOpened;
  }
}
