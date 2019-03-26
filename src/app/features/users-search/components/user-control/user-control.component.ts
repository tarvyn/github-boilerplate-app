import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlComponent {
  @Input() label: string;
  @Input() value: string | number;
  @Input() href: string;
}
