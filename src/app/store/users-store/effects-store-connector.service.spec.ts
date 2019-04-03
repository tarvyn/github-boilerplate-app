/* tslint:disable:no-any */
import { TestBed } from '@angular/core/testing';
import { MocksModule } from '@testing/mocks';
import { EffectsStoreConnectorService } from './effects-store-connector.service';

describe('EffectsStoreConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MocksModule]
  }));

  it('should be created', () => {
    const service: EffectsStoreConnectorService = TestBed.get(EffectsStoreConnectorService);

    expect(service)
      .toBeTruthy();
  });
});
