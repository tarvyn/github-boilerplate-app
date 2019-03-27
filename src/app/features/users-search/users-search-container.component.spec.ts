import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { State } from '@store/state';
import * as fromUsers from '@store/users-store';
import { MocksModule } from '@testing/mocks';
import { MockSearchBarComponent, MockUsersListComponent } from '@testing/mocks/components';
import { Subject } from 'rxjs';
import { UsersSearchContainerComponent } from './users-search-container.component';
import { UsersSearchSelectorsService } from './users-search-selectors.service';

describe('UsersSearchContainerComponent', () => {
  const selectors = {
    notFoundMessage: '.not-found-message'
  };
  let component: UsersSearchContainerComponent;
  let fixture: ComponentFixture<UsersSearchContainerComponent>;
  let mockStore: MockStore<State>;
  let selectorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSearchContainerComponent],
      imports: [MocksModule],
      providers: [{
        provide: UsersSearchSelectorsService,
        useValue: {
          users$: new Subject(),
          search$: new Subject(),
          isLoading$: new Subject()
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    selectorsService = TestBed.get(UsersSearchSelectorsService);
    fixture = TestBed.createComponent(UsersSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should correctly pass parameters to search bar component', () => {
    selectorsService.search$.next('fakeSearch');
    selectorsService.isLoading$.next('fakeIsLoading');
    fixture.detectChanges();

    const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

    expect(searchBarComponent.value)
      .toBe('fakeSearch');
    expect(searchBarComponent.isLoading)
      .toBe('fakeIsLoading');
  });

  it('should correctly pass parameters to user list component', () => {
    const fakeUsers = [{ fake: true }];

    selectorsService.users$.next(fakeUsers);
    fixture.detectChanges();

    const usersListComponent = fixture.debugElement.query(By.directive(MockUsersListComponent)).componentInstance;

    expect(usersListComponent.users)
      .toBe(fakeUsers);
  });

  it(`should show "no users found" message in case no users were found
      and users are not fetching`,
    () => {
      const getNotFoundMessage = () => {
        const element = fixture.debugElement.query(By.css(selectors.notFoundMessage));

        return element && element.nativeElement.textContent.trim();
      };

      selectorsService.isLoading$.next(false);
      selectorsService.users$.next([]);
      fixture.detectChanges();

      expect(getNotFoundMessage())
        .toBe('No users were found');

      selectorsService.isLoading$.next(false);
      selectorsService.users$.next([1]);
      fixture.detectChanges();

      expect(!!getNotFoundMessage())
        .toBeFalsy('message should not be shown in case at least one user was found');

      selectorsService.isLoading$.next(true);
      selectorsService.users$.next([]);
      fixture.detectChanges();

      expect(!!getNotFoundMessage())
        .toBeFalsy('message should not be shown in case users are fetching');
    });

  it('should call onSearch method on search event', () => {
    const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

    spyOn(component, 'onSearch');
    searchBarComponent.search.emit('fakeSearch');

    expect(component.onSearch)
      .toHaveBeenCalledWith('fakeSearch');
  });

  it('should call onSearchApply method on searchApply event', () => {
    const searchBarComponent = fixture.debugElement.query(By.directive(MockSearchBarComponent)).componentInstance;

    spyOn(component, 'onSearchApply');
    searchBarComponent.searchApply.emit();

    expect(component.onSearchApply)
      .toHaveBeenCalled();
  });

  it('should correctly dispatch action on search method call', () => {
    spyOn(mockStore, 'dispatch');
    component.onSearch('fakeSearch');

    expect(mockStore.dispatch)
      .toHaveBeenCalledWith(new fromUsers.SetSearchAction({ search: 'fakeSearch' }));
  });

  it('should correctly dispatch search apply action', () => {
    spyOn(mockStore, 'dispatch');
    component.onSearchApply();

    expect(mockStore.dispatch)
      .toHaveBeenCalledWith(new fromUsers.SearchUsersStartAction());
  });
});
