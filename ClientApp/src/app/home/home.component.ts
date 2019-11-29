import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import data from './data.json';
import { NiHon } from './nihonmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  datas: NiHon[] = data;
  demo = this.datas[0];

  url = 'https://images.unsplash.com/photo-1470859624578-4bb57890378a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
}
