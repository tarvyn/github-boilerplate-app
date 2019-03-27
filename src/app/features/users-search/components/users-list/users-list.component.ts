import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GithubUser } from '@models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() users: Array<GithubUser>;

  trackUsersBy(index: number, user: GithubUser): number {
    return user.id;
  }
}
