import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GithubUser } from '@models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
class UsersListComponent {
  @Input() public users: Array<GithubUser>;

  public trackUsersBy(index: number, user: GithubUser): number {
    return user.id;
  }
}

export { UsersListComponent };
