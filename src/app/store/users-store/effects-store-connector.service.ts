import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@store';
import * as usersSelectors from '@store/users-store/selectors';

@Injectable({
  providedIn: 'root'
})
export class EffectsStoreConnectorService {
  public usersSearch$ = this.store.pipe(select(usersSelectors.selectUsersSearch));

  constructor(private store: Store<State>) { }
}
