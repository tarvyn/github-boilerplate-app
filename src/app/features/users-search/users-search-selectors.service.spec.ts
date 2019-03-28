import { TestBed } from '@angular/core/testing';
import { MocksModule } from '@testing/mocks';

import { UsersSearchContainerService } from './users-search-selectors.service';

describe('UsersSearchSelectorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MocksModule]
  }));

  it('should be created', () => {
    const service: UsersSearchContainerService = TestBed.get(UsersSearchContainerService);
    expect(service)
      .toBeTruthy();
  });
});
