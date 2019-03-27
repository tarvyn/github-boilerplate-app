import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsers from '@store/users-store';
import { UsersSearchSelectorsService } from './users-search-selectors.service';

@Component({
  selector: 'app-users-search-container',
  templateUrl: './users-search-container.component.html',
  styleUrls: ['./users-search-container.component.scss']
})
class UsersSearchContainerComponent {
  constructor(
    private store: Store<fromUsers.State>,
    private selectors: UsersSearchSelectorsService
  ) {}

  onSearch(search: string): void {
    this.store.dispatch(new fromUsers.SetSearchAction({ search }));
  }

  onSearchApply(): void {
    this.store.dispatch(new fromUsers.SearchUsersStartAction());
  }
}

export { UsersSearchContainerComponent };
