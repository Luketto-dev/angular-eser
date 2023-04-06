import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics.service';
import { Comic } from '../classes/Comic';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  comics : Comic [] = []
  constructor(private ComicsService : ComicsService) {
    
  }

  ngOnInit() {
    this.comics = this.ComicsService.getComics()
  }
}
