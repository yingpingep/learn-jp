import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { NiHon } from '../shared/nihonmodel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() demo: NiHon;
  @Input() i: number;

  constructor() {
  }

  ngOnInit() {
  }
}
