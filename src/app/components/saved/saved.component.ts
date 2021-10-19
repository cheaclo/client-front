import { SavedService } from './../../services/saved.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(private savedService: SavedService) {
    savedService.getSavedProducts(1)
    .subscribe(products => {

    });
  }

  ngOnInit(): void {
  }

}
