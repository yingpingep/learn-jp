import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  sender = new Subject<string>();
  oo = this.sender.asObservable();

  constructor() { }
}
