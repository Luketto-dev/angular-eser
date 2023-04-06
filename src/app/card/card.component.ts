import { Comic } from './../classes/Comic';
import { ComicsService } from './../services/comics.service';
import { Component , Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent  {

  @Input () comic : Comic | undefined
  

}
