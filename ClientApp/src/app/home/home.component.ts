import { Component, AfterContentInit, OnInit } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { NotifyService, NotifyServiceFix } from '../shared/notify.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

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

  onDragEnd(ev: CdkDragEnd): void {
    const distance = Math.sqrt(Math.pow(ev.distance.x, 2) + Math.pow(ev.distance.y, 2));
    ev.source.reset();

    if (distance > 150) {
      const temp = this.datas.shift();
      this.datas.push(temp);
    }
  }
}
