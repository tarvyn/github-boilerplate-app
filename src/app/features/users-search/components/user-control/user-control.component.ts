import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
class UserControlComponent {
  @Input() public label: string;
  @Input() public value: string | number;
  @Input() public href: string;
}

export { UserControlComponent };
