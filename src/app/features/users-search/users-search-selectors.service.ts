import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from '@store/users-store';

@Injectable({
  providedIn: 'root'
})
class UsersSearchSelectorsService {
  users$ = this.store.pipe(select(fromUsers.selectAllUsers));
  search$ = this.store.pipe(select(fromUsers.selectUsersSearch));
  isLoading$ = this.store.pipe(select(fromUsers.selectUsersIsLoading));

  constructor(private store: Store<fromUsers.State>) {}
}

export { UsersSearchSelectorsService };
