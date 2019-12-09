import { Component, AfterContentInit, OnInit } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { NotifyService } from '../shared/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  datas: NiHon[];

  constructor(private notifyService: NotifyService) {
  }

  ngOnInit() {
    this.notifyService.getWords().subscribe(
      result => {
        this.datas = result;
      }
    );
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
