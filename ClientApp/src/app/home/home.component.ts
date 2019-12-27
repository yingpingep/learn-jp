import { Component, AfterContentInit, OnInit } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { NotifyService, NotifyServiceFix } from '../services/notify.service';
import { CdkDragEnd, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter } from '@angular/cdk/drag-drop';
import { StarService } from '../services/star.service';
import { Router, RouterEvent } from '@angular/router';


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
    private starService: StarService,
    private router: Router) {

  }

  ngOnInit() {
    this.notifyService.getWords().subscribe(
      (result) => {
        this.datas = result;
        const si = this.notifyService.getIndex();
        if (si) {
          const temp = this.datas.filter(item => item.id >= si);

          this.datas = temp.concat(...this.datas.filter(item => item.id < si));
        }
      }
    );

    this.remo = [];
  }

  onDrag(event: CdkDragDrop<NiHon[]>): any {
    if (event.previousContainer === event.container) {
      const distance = Math.sqrt(Math.pow(event.distance.x, 2) + Math.pow(event.distance.y, 2));

      if (distance > 150) {
        this._moveNihon();
      }
    } else {
      const temp = this._moveNihon();
      this.starService.addToStar(temp);
    }
  }

  private _moveNihon(): NiHon {
    const temp = this.datas.shift();
    this.datas.push(temp);
    this.notifyService.saveIndex(temp.id + 1);
    return temp;
  }

  onMove(event: CdkDragEnter<NiHon[]>): any {
    this.ok = true;
  }

  onMoveEnd(event: CdkDragEnter<NiHon[]>): any {
    this.ok = false;
  }
}
