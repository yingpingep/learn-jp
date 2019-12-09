import { Component, OnInit, Input } from '@angular/core';
import { NiHon } from './nihonmodel';
import { NotifyService } from '../shared/notify.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() demo: NiHon;
  @Input() i: number;

  constructor(private notifyService: NotifyService) {
  }

  ngOnInit() {
  }
}
