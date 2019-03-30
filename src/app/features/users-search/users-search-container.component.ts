import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersSearchContainerService } from './users-search-selectors.service';

@Component({
  selector: 'app-users-search-container',
  templateUrl: './users-search-container.component.html',
  styleUrls: ['./users-search-container.component.scss']
})
class UsersSearchContainerComponent {
  public users$ = this.usersSearchContainerService.users$;
  public search$ = this.usersSearchContainerService.search$;
  public isLoading$ = this.usersSearchContainerService.isLoading$;
  public usersNotFound$ = combineLatest(
    this.users$,
    this.isLoading$
  )
    .pipe(
      map(([users, isLoading]) => !isLoading && !(users && users.length)),
    );

  constructor(
    private usersSearchContainerService: UsersSearchContainerService
  ) {}

  public onSearch(search: string): void {
    this.usersSearchContainerService.dispatchSetSearchAction(search);
  }

  public onSearchApply(): void {
    this.usersSearchContainerService.dispatchSearchApplyAction();
  }
}

export { UsersSearchContainerComponent };
