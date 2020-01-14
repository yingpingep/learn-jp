import { Component, OnInit } from '@angular/core';
import { StarService } from '../services/star.service';
import { NiHon } from '../shared/nihonmodel';
import { CdkDragMove, CdkDrag } from '@angular/cdk/drag-drop';
import { observable, fromEvent } from 'rxjs';
import { reduce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-starlist',
  templateUrl: './starlist.component.html',
  styleUrls: ['./starlist.component.scss']
})
export class StarlistComponent implements OnInit {
  datas: NiHon[];

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.datas = this.starService.getStarList();
    this.starService.starObservable.subscribe((data) => {
      this.datas = data.map(x => x);
    });
  }

  remove(item: NiHon) {
    this.starService.removeFromStarList(item);
  }
}
