import { NiHon } from '../../shared/nihonmodel';
import { Observable, Subject } from 'rxjs';

export interface INotifyService {
  shiftNotification: Subject<string>;
  getWords(): Observable<NiHon[]>;
  saveIndex(id: number): void;
  getIndex(): number | undefined;
}
