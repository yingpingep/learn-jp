import { Injectable } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private star: NiHon[] = [];

  constructor() { }

  addToStar(item: NiHon): void {
    this.star.push(item);
  }

  getStarList(): NiHon[] {
    return this.star;
  }
}
