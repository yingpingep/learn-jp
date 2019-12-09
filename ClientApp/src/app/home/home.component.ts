import { Component, AfterContentInit } from '@angular/core';
import { NiHon } from '../card/nihonmodel';
import { NotifyService } from '../shared/notify.service';

const NDATA = [
  {
    head: ['見', 'み'],
    tail: 'る',
    complete: '見る',
    now: {
      y: '見る',
      n: '見ない',
      ry: '見ます',
      rn: '見ません'
    },
    te: '見て',
    zh_tw: '看見',
    type: 'II'
  },
  {
    head: ['行', 'い'],
    tail: 'く',
    complete: '行く',
    now: {
      y: '行く',
      n: '行かない',
      ry: '行きます',
      rn: '行きません'
    },
    te: '行って',
    zh_tw: '走',
    type: 'I'
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  datas: NiHon[] = NDATA;
  constructor(private notifyService: NotifyService) {
  }

  onSwipe(evt: PointerEvent, key: string) {
    const vocabDiv = document.getElementById(key) as HTMLDivElement;
    vocabDiv.classList.add(...['animated', 'fadeOut']);
  }

  OK(evt: AnimationEvent) {
    const vocabDiv = evt.currentTarget as HTMLDivElement;
    vocabDiv.classList.remove(...['animated', 'fadeOut']);
    const hooh = this.datas.pop();
    this.datas = [hooh, this.datas[0]];
  }
}
