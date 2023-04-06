import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() backgroundImageUrl : string = '';
  @Input() title : string = '';
  @Input() description : string = '';

  constructor() {
  }

  ngOnInit() {
  }
}
