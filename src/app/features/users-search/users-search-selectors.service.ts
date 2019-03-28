import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from '@store/users-store';

@Injectable({
  providedIn: 'root'
})
class UsersSearchContainerService {
  public users$ = this.store.pipe(select(fromUsers.selectAllUsers));
  public search$ = this.store.pipe(select(fromUsers.selectUsersSearch));
  public isLoading$ = this.store.pipe(select(fromUsers.selectUsersIsLoading));

  constructor(private store: Store<fromUsers.State>) {}

  public dispatchSetSearchAction(search: string): void {
    this.store.dispatch(new fromUsers.SetSearchAction({ search }));
  }

  public dispatchSearchApplyAction(): void {
    this.store.dispatch(new fromUsers.SearchUsersStartAction());
  }
}

export { UsersSearchContainerService };
