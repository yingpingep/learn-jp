import { Component, OnInit, ViewChildren } from '@angular/core';
import { StarService } from '../services/star.service';
import { NiHon } from '../shared/nihonmodel';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { observable, fromEvent } from 'rxjs';

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
  }
}
