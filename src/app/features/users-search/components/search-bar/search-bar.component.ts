import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  @Input() value: string;
  @Input() isLoading: boolean;
  @Output() search = new EventEmitter<string>();
  @Output() searchApply = new EventEmitter<void>();
}
