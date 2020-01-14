import { Injectable } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private star: NiHon[];
  constructor() { }

  addToStar(item: NiHon): void {
    this.star = this.getStarList() ? this.getStarList() : [];

    const temp = this.star.find((value) => value.id === item.id);
    if (!temp) {
      this.star.push(item);
      localStorage.setItem('starList', JSON.stringify(this.star));
    }
  }

  getStarList(): NiHon[] | undefined {
    const starFromLocalStorage = localStorage.getItem('starList');
    if (starFromLocalStorage) {
      return JSON.parse(localStorage.getItem('starList'));
    }
  }
}
