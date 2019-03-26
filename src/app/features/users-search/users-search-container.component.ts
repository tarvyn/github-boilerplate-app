import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from '@store/users-store';

@Component({
  selector: 'app-users-search-container',
  templateUrl: './users-search-container.component.html',
  styleUrls: ['./users-search-container.component.scss']
})
export class UsersSearchContainerComponent {
  users$ = this.store.pipe(select(fromUsers.selectAllUsers));

  constructor(private store: Store<fromUsers.State>) {}
}
