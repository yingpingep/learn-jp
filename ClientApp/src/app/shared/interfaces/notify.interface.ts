import { NiHon } from '../nihonmodel';
import { Observable, Subject } from 'rxjs';

export interface INotifyService {
  shiftNotification: Subject<string>;
  getWords(): Observable<NiHon[]>;
}
