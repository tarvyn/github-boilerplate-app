/* tslint:disable:no-any no-unbound-method no-empty */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { State } from '@store/state';
import { MocksModule } from '@testing/mocks';
import { MockSearchBarComponent, MockUsersListComponent } from '@testing/mocks/components';
import { defer, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { UsersSearchContainerComponent } from './users-search-container.component';
import { UsersSearchContainerService } from './users-search-selectors.service';

describe('UsersSearchContainerComponent', () => {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual)
      .toEqual(expected);
  });
  const selectors = {
    notFoundMessage: '.not-found-message'
  };
  let component: UsersSearchContainerComponent;
  let fixture: ComponentFixture<UsersSearchContainerComponent>;
  let mockStore: MockStore<State>;
  let containerService;
  let users$$;
  let search$$;
  let isLoading$$;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSearchContainerComponent],
      imports: [MocksModule],
      providers: [{
        provide: UsersSearchContainerService,
        useValue: {
          users$: defer(() => users$$),
          search$: defer(() => search$$),
          isLoading$: defer(() => isLoading$$),
          dispatchSetSearchAction() {},
          dispatchSearchApplyAction() {}
        },
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    containerService = TestBed.get(UsersSearchContainerService);
    fixture = TestBed.createComponent(UsersSearchContainerComponent);
    component = fixture.componentInstance;
  });

  describe('component API', () => {
    describe('usersNotFound$ property', () => {
      it('should correctly indicate whether users were not found', () => {
        scheduler.run(({ hot, expectObservable }) => {
          users$$ = hot('-a-b-', {
            a: undefined,
            b: [1]
          });
          isLoading$$ = hot('c-d-c', {
            c: true,
            d: false
          });

          expectObservable(component.usersNotFound$)
            .toBe('-ftff', { f: false, t: true });
        });
      });
    });

    describe('onSearch method', () => {
      it('should correctly dispatch action', () => {
        spyOn(containerService, 'dispatchSetSearchAction');

        component.onSearch('fakeSearch');

        expect(containerService.dispatchSetSearchAction)
          .toHaveBeenCalledWith('fakeSearch');
      });
    });

    describe('onSearchApply method', () => {
      it('should correctly dispatch search apply action', () => {
        spyOn(containerService, 'dispatchSearchApplyAction');

        component.onSearchApply();

        expect(containerService.dispatchSearchApplyAction)
          .toHaveBeenCalled();
      });
    });
  });

  describe('component View', () => {

    it('should create', () => {
      expect(component)
        .toBeTruthy();
    });

    describe('search-bar component', () => {
      it('should correctly pass input parameters', () => {
        search$$ = of('fakeSearch');
        isLoading$$ = of('fakeIsLoading');
        fixture.detectChanges();
        const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

        expect(searchBarComponent.value)
          .toBe('fakeSearch');
        expect(searchBarComponent.isLoading)
          .toBe('fakeIsLoading');
      });

      it('should correctly call onSearch method on search event', () => {
        const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

        spyOn(component, 'onSearch');
        searchBarComponent.search.emit('fakeSearch');

        expect(component.onSearch)
          .toHaveBeenCalledWith('fakeSearch');
      });

      it('should correctly call onSearchApply method on searchApply event', () => {
        const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

        spyOn(component, 'onSearchApply');
        searchBarComponent.searchApply.emit();

        expect(component.onSearchApply)
          .toHaveBeenCalled();
      });
    });

    describe('users-list component', () => {
      it('should correctly pass input parameters', () => {
        const fakeUsers = [{ fake: true }];

        users$$ = of(fakeUsers);
        fixture.detectChanges();

        const usersListComponent = fixture.debugElement.query(By.directive(MockUsersListComponent)).componentInstance;

        expect(usersListComponent.users)
          .toBe(fakeUsers);
      });
    });

    describe('not-found message', () => {
      const getNotFoundMessage = () => {
        const element = fixture.debugElement.query(By.css(selectors.notFoundMessage));

        return element && element.nativeElement.textContent.trim();
      };

      it('should be shown in case there are no users found and users are not being fetched', () => {
        isLoading$$ = of(false);
        users$$ = of([]);
        fixture.detectChanges();

        expect(getNotFoundMessage())
          .toBe('No users were found');
      });

      it('should not be shown in case at least one user was found', () => {
        isLoading$$ = of(false);
        users$$ = of(['fake']);
        fixture.detectChanges();

        expect(getNotFoundMessage())
          .toBeNull();
      });

      it('should not be shown in case users are being fetched', () => {
        isLoading$$ = of(true);
        users$$ = of([]);
        fixture.detectChanges();

        expect(getNotFoundMessage())
          .toBeNull();
      });
    });
  });
});
