import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item, User } from '../models';

const mockItems: Array<Item> = [
  {
    id: '0',
    someDate: new Date()
  },
  {
    id: '1',
    someDate: new Date()
  },
];

const mockUser: User = {
  id: 1
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getItems(): Observable<Array<Item>> {
    return of(mockItems);
  }

  login(userName: string, password: string): Observable<User> {
    return of(mockUser);
  }
}
