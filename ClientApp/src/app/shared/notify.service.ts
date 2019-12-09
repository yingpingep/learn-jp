import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NiHon } from './nihonmodel';

const NDATA = [
  {
    head: ['見', 'み'],
    tail: 'る',
    complete: '見る',
    now: {
      y: '見る',
      n: '見ない',
      ry: '見ます',
      rn: '見ません'
    },
    te: '見て',
    zh_tw: '看見',
    type: 'II'
  },
  {
    head: ['行', 'い'],
    tail: 'く',
    complete: '行く',
    now: {
      y: '行く',
      n: '行かない',
      ry: '行きます',
      rn: '行きません'
    },
    te: '行って',
    zh_tw: '走',
    type: 'I'
  },
];

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getWords(): Observable<NiHon[]> {
    return this.httpClient.get<NiHon[]>(this.baseUrl + 'nihon');
  }
}
