import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { NotifyService } from '../services/notify.service';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { StarService } from '../services/star.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, AfterViewInit {
  datas: NiHon[];
  remo: NiHon[];
  isShowed = false;
  isScaled = false;
  @ViewChild('remoList', { static: true }) remoList: CdkDropList;

  constructor(
    private notifyService: NotifyService,
    private starService: StarService) { }

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

  ngAfterViewInit(): void {
    this.remoList.sorted.subscribe(() => {
      this.isScaled = true;
    });

    this.remoList.exited.subscribe(() => {
      this.isScaled = false;
    });

    this.remoList.dropped.subscribe(() => {
      this.isScaled = false;
    });
  }

  onDragOrDrop(event: CdkDragDrop<NiHon[]>): any {
    if (event.previousContainer === event.container) {
      const distance = Math.sqrt(Math.pow(event.distance.x, 2) + Math.pow(event.distance.y, 2));

      if (distance > 120) {
        this._moveNihon();
      }
    } else {
      const temp = this._moveNihon();
      this.starService.addToStar(temp);
    }
    this.isShowed = false;
  }

  private _moveNihon(): NiHon {
    const temp = this.datas.shift();
    this.datas.push(temp);
    this.notifyService.saveIndex(temp.id + 1);
    return temp;
  }

  onMoved() {
    this.isShowed = true;
  }

  onMoveEnded() {
    this.isShowed = false;
  }
}
