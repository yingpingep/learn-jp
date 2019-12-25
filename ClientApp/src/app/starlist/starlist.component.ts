import { Component, OnInit } from '@angular/core';
import { StarService } from '../services/star.service';
import { NiHon } from '../shared/nihonmodel';

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
