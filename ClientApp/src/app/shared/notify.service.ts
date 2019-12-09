import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NiHon } from './nihonmodel';

const NDATA = [
  {
    kanji: '見る',
    kana: 'みる',
    zh_tw: '看見'
  },
  {
    kanji: '行く',
    kana: 'いく',
    zh_tw: '走',
  },
];

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  moveEndNotification = new Subject<string>();

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  getWords(): Observable<NiHon[]> {
    return this.httpClient.get<NiHon[]>(this.baseUrl + 'nihon');
  }

  getWordsFix(): NiHon[] {
    return NDATA;
  }
}
