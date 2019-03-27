import { TestBed } from '@angular/core/testing';
import { MocksModule } from '@testing/mocks';

import { UsersSearchSelectorsService } from './users-search-selectors.service';

describe('UsersSearchSelectorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MocksModule]
  }));

  it('should be created', () => {
    const service: UsersSearchSelectorsService = TestBed.get(UsersSearchSelectorsService);
    expect(service)
      .toBeTruthy();
  });
});
