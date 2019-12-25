import { Component, AfterContentInit, OnInit } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { NotifyService, NotifyServiceFix } from '../services/notify.service';
import { CdkDragEnd, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter } from '@angular/cdk/drag-drop';
import { StarService } from '../services/star.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  datas: NiHon[];
  remo: NiHon[];
  ok = false;

  constructor(
    private notifyService: NotifyService,
    private starService: StarService) {
  }

  ngOnInit() {
    this.notifyService.getWords().subscribe(
      result => {
        this.datas = result;
      }
    );

    this.remo = [];
  }

  rs(event: CdkDragDrop<NiHon[]>): any {
    if (event.previousContainer === event.container) {
      const distance = Math.sqrt(Math.pow(event.distance.x, 2) + Math.pow(event.distance.y, 2));
      if (distance > 150) {
        const temp = this.datas.shift();
        this.datas.push(temp);
      }
    } else {
      const temp = this.datas.shift();
      this.datas.push(temp);
      this.starService.addToStar(temp);
    }
  }

  oh(event: CdkDragEnter<NiHon[]>): any {
    this.ok = true;
  }

  oho(event: CdkDragEnter<NiHon[]>): any {
    this.ok = false;
  }
}
