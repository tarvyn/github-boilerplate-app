import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GithubUser } from '../models';

const mockUsers: Array<GithubUser> = [
  {
    id: 0
  },
  {
    id: 1
  }
];

// TODO: replace mocks with api call
@Injectable({
  providedIn: 'root'
})
export class GithubApiConnectorService {
  searchUsers(userName: string): Observable<Array<GithubUser>> {
    return of(mockUsers);
  }
}
