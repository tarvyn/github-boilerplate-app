import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
class SearchBarComponent {
  @Input() public value: string;
  @Input() public isLoading: boolean;
  @Output() public search = new EventEmitter<string>();
  @Output() public searchApply = new EventEmitter<void>();
}

export { SearchBarComponent };
