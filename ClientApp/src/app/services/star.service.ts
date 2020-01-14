import { Injectable } from '@angular/core';
import { NiHon } from '../shared/nihonmodel';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private star: NiHon[];
  private starSubject: Subject<NiHon[]>;
  starObservable: Observable<NiHon[]>;

  constructor() {
    this.starSubject = new Subject<NiHon[]>();
    this.starObservable = this.starSubject.asObservable();
  }

  addToStar(item: NiHon): void {
    this.star = this.getStarList() ? this.getStarList() : [];

    const temp = this.star.find((value) => value.id === item.id);
    if (!temp) {
      this.star.push(item);
      localStorage.setItem('starList', JSON.stringify(this.star));

      this.starSubject.next(this.star);
    }
  }

  getStarList(): NiHon[] | undefined {
    const starFromLocalStorage = localStorage.getItem('starList');
    if (starFromLocalStorage) {
      this.star = JSON.parse(localStorage.getItem('starList'));
      return this.star;
    }
    return undefined;
  }

  removeFromStarList(item: NiHon): void {
    this.star = this.star.filter((value) => {
      if (value !== item) {
        return value;
      }
    });

    localStorage.setItem('starList', JSON.stringify(this.star));
    this.starSubject.next(this.star);
  }
}
