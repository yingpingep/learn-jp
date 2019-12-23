import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NiHon } from './nihonmodel';
import { INotifyService } from './interfaces/notify.interface';
import { environment } from 'src/environments/environment';

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
  deps: [ HttpClient, 'BASE_URL' ]
};
