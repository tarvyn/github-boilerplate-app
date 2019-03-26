import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockState } from '@ngrx/store/testing';
import { MocksModule } from '@testing/mocks';

import { UsersSearchContainerComponent } from './users-search-container.component';

describe('UsersSearchContainerComponent', () => {
  let component: UsersSearchContainerComponent;
  let fixture: ComponentFixture<UsersSearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSearchContainerComponent],
      imports: [MocksModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
