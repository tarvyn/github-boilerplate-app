import { TestBed } from '@angular/core/testing';

import { GithubApiConnectorService } from './github-api-connector.service';

describe('GithubApiConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubApiConnectorService = TestBed.get(GithubApiConnectorService);
    expect(service)
      .toBeTruthy();
  });
});
