import { Injectable } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private star: NiHon[];
  private localStorage = window.localStorage;
  constructor() { }

  addToStar(item: NiHon): void {
    this.star = this.getStarList() ? this.getStarList() : [];

    const temp = this.star.find((value) => value.id === item.id);
    if (!temp) {
      this.star.push(item);
      this.localStorage.setItem('starList', JSON.stringify(this.star));
    }
  }

  getStarList(): NiHon[] | undefined {
    const starFromLocalStorage = this.localStorage.getItem('starList');
    if (starFromLocalStorage) {
      return JSON.parse(this.localStorage.getItem('starList'));
    }
  }
}
