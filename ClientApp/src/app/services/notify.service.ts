import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NiHon } from '../shared/nihonmodel';
import { INotifyService } from './interfaces/notify.interface';
import { environment } from 'src/environments/environment';

const NDATA = [
  { 'id': 24, 'kanji': '使う', 'kana': 'つかう', 'zh_tw': '用、使用、利用' },
  { 'id': 25, 'kanji': 'もらう', 'kana': '', 'zh_tw': '得到、拿、要' },
  { 'id': 26, 'kanji': '探す', 'kana': 'さがす', 'zh_tw': '找、尋找' },
  { 'id': 27, 'kanji': 'なくす', 'kana': '', 'zh_tw': '弄丟' },
  { 'id': 28, 'kanji': 'なる', 'kana': '', 'zh_tw': '變成' },
  { 'id': 29, 'kanji': '乗る', 'kana': 'のる', 'zh_tw': '上、搭乘' },
  { 'id': 30, 'kanji': '降る', 'kana': 'ふる', 'zh_tw': '下（雨）' },
  { 'id': 31, 'kanji': '分かる', 'kana': 'わかる', 'zh_tw': '知道、會、懂' },
  { 'id': 32, 'kanji': 'あげる', 'kana': '', 'zh_tw': '給' },
  { 'id': 33, 'kanji': '浴びる', 'kana': 'あびる', 'zh_tw': '淋' },
  { 'id': 34, 'kanji': '降りる', 'kana': 'おりる', 'zh_tw': '下（車）' },
  { 'id': 35, 'kanji': 'かける', 'kana': '', 'zh_tw': '掛、打（電話）' }
];

@Injectable()
export class NotifyService implements INotifyService {
  shiftNotification = new Subject<string>();

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  getWords(): Observable<NiHon[]> {
    return this.httpClient.get<NiHon[]>(this.baseUrl + 'nihon');
  }

  saveIndex(id: number): void {
    localStorage.setItem('index', id.toString());
  }

  getIndex(): number | undefined {
    const si = localStorage.getItem('index');
    if (si) {
      return parseInt(si, 10);
    }
  }
}

@Injectable()
export class NotifyServiceFix implements INotifyService {
  shiftNotification = new Subject<string>();

  constructor() { }

  getWords(): Observable<NiHon[]> {
    return new Observable(subscriber => {
      subscriber.next(NDATA);
    });
  }

  saveIndex(id: number): void {
    localStorage.setItem('index', id.toString());
  }

  getIndex(): number | undefined {
    const si = localStorage.getItem('index');
    if (si) {
      return parseInt(si, 10);
    }
  }
}

const nsFactory: any = (http: HttpClient, base_url: string) => {
  if (environment.production) {
    return new NotifyService(http, base_url);
  } else {
    return new NotifyServiceFix();
  }
};

export const nsProvider = {
  provide: NotifyService,
  useFactory: nsFactory,
  deps: [HttpClient, 'BASE_URL']
};
