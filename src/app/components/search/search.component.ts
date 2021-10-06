import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shops: Shop[] = [
    {name: 'hm', imageSource: 'assets/images/hm.png'},
    {name: 'hm', imageSource: 'assets/images/hm.png'},
    {name: 'hm', imageSource: 'assets/images/hm.png'},
    {name: 'hm', imageSource: 'assets/images/hm.png'},
    {name: 'hm', imageSource: 'assets/images/hm.png'},
    {name: 'hm', imageSource: 'assets/images/hm.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
