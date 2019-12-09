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
    // this.datas = this.notifyService.getWordsFix();

    this.notifyService.moveEndNotification.subscribe(
      result => {
        const temp = this.datas.shift();
        this.datas.push(temp);
      });
  }
}
