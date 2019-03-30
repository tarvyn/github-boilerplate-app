/* tslint:disable:no-any */
import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MocksModule } from '@testing/mocks';
import { MockUserControlComponent } from '@testing/mocks/components';
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  const selectors = {
    panelCard: '.card',
    panelCardTitle: '.btn-link',
    panelCardBody: '.card-body',
  };
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [
        MocksModule,
        NgbAccordionModule
      ]
    })
    // Need to override detection strategy due to existing angular issue:
    // https://github.com/angular/angular/issues/12313#issuecomment-298697327
      .overrideComponent(
        UsersListComponent,
        {
          set: {
            changeDetection: ChangeDetectionStrategy.Default
          }
        }
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('component API', () => {
    describe('trackUsersBy method', () => {
      it('should correctly track users list', () => {
        const fakeUser = { id: 'fakeId' } as any;

        expect(component.trackUsersBy(0, fakeUser))
          .toBe(fakeUser.id);
      });
    });
  });

  describe('component View', () => {
    it('should create', () => {
      expect(component)
        .toBeTruthy();
    });

    describe('user panel', () => {
      it('should display correct amount of user panel cards', () => {
        component.users = [{}, {}, {}] as any;
        fixture.detectChanges();

        const panels = fixture.debugElement.queryAll(By.css(selectors.panelCard));

        expect(panels.length)
          .toBe(component.users.length);
      });

      it('should correctly display each user’s login title', () => {
        component.users = [{ login: 'fakeLogin1' }, { login: 'fakeLogin2' }, { login: 'fakeLogin3' }] as any;
        fixture.detectChanges();

        const cardTitles = fixture.debugElement.queryAll(By.css(selectors.panelCardTitle))
          .map(debugElement => debugElement.nativeElement.textContent.trim());

        expect(cardTitles)
          .toEqual(component.users.map(user => user.login));
      });

      it('should correctly pass parameters to user-control components', () => {
        const fakeUsers = [{
          login: 'fakeLogin1',
          id: 'fakeId',
          node_id: 'fakeNodeId',
          gravatar_id: 'fakeGravatarId',
          url: 'fakeUrl',
          html_url: 'fakeHtmlUrl',
          followers_url: 'fakeFollowersUrl',
        }] as any;

        component.users = fakeUsers;
        fixture.detectChanges();


        const cardTitleElement = fixture.debugElement.query(By.css(selectors.panelCardTitle)).nativeElement;

        // expand panel by clicking on card title
        cardTitleElement.click();
        fixture.detectChanges();

        const userControlComponents = fixture.debugElement.queryAll(By.directive(MockUserControlComponent))
          .map(debugElement => debugElement.componentInstance);
        const userControlsInputs = userControlComponents
          .map(({ label, value, href }) => ({ label, value, href }));

        expect(userControlsInputs)
          .toEqual([
            {
              label: 'id',
              value: 'fakeId',
              href: undefined
            },
            {
              label: 'node id',
              value: 'fakeNodeId',
              href: undefined
            },
            {
              label: 'gravatar id',
              value: 'fakeGravatarId',
              href: undefined
            },
            {
              label: 'url',
              value: undefined,
              href: 'fakeUrl'
            },
            {
              label: 'html url',
              value: undefined,
              href: 'fakeHtmlUrl'
            },
            {
              label: 'followers url',
              value: undefined,
              href: 'fakeFollowersUrl'
            }
          ]);
      });
    });
  });
});
