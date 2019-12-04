import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { NiHon } from './nihonmodel';

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
  demo = this.datas[0];

  url = 'https://images.unsplash.com/photo-1470859624578-4bb57890378a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

  onSwipe(evt: any) {
    const pickOne = Math.round(Math.random() * 10) % this.datas.length;
    console.log(pickOne);
    this.demo = this.datas[pickOne];
  }
}
