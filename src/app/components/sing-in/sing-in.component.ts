import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  userInput = new FormGroup({
    email: new FormControl(''),
    passoword: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  ngSignIn(): void {
    console.log(this.userInput);
  }

  validation(): boolean {
    return true;
  }
}
