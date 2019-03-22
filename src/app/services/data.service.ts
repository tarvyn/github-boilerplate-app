import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models';

const mocks: Array<Item> = [
  {
    id: '0',
    someDate: new Date()
  },
  {
    id: '1',
    someDate: new Date()
  },
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getItems(): Observable<Array<Item>> {
    return of(mocks);
  }
}
