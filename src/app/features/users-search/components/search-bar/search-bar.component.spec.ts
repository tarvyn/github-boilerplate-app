/* tslint:disable:no-unbound-method */
import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MocksModule } from '@testing/mocks';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  const selectors = {
    input: '.form-control',
    spinner: '.spinner',
    searchButton: '.btn'
  };
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MocksModule, FormsModule],
      declarations: [SearchBarComponent]
    })
    // Need to override detection strategy due to existing angular issue:
    // https://github.com/angular/angular/issues/12313#issuecomment-298697327
      .overrideComponent(
        SearchBarComponent,
        {
          set: {
            changeDetection: ChangeDetectionStrategy.Default
          }
        }
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('component View', () => {
    it('should create', () => {
      expect(component)
        .toBeTruthy();
    });

    describe('search input', () => {
      it('should correctly pass search value', () => {
        component.value = 'fakeValue';
        fixture.detectChanges();

        const inputElement = fixture.debugElement.query(By.css(selectors.input));

        expect(inputElement.nativeElement.value)
          .toBe('fakeValue');
      });

      it('should correctly emit search event on keyup', () => {
        spyOn(component.search, 'emit');
        component.value = 'fakeValue';
        fixture.detectChanges();

        const inputElement = fixture.debugElement.query(By.css(selectors.input)).nativeElement as HTMLInputElement;

        inputElement.dispatchEvent(new KeyboardEvent('keyup'));

        expect(component.search.emit)
          .toHaveBeenCalledWith('fakeValue');
      });

      it('should correctly emit search event on keyup', () => {
        spyOn(component.searchApply, 'emit');

        const inputElement = fixture.debugElement.query(By.css(selectors.input)).nativeElement as HTMLInputElement;

        inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

        expect(component.searchApply.emit)
          .toHaveBeenCalled();
      });
    });

    describe('spinner', () => {
      it('should be shown in case isLoading equals true', () => {
        component.isLoading = true;
        fixture.detectChanges();

        const spinnerElement = fixture.debugElement.query(By.css(selectors.spinner));

        expect(spinnerElement)
          .toBeTruthy();
      });

      it('should not be shown in case isLoading equals false', () => {
        component.isLoading = false;
        fixture.detectChanges();

        const spinnerElement = fixture.debugElement.query(By.css(selectors.spinner));

        expect(spinnerElement)
          .toBeNull();
      });
    });

    describe('search button', () => {
      it('should correctly emit search apply event on button click', () => {
        const searchButtonElement = fixture.debugElement.query(By.css(selectors.searchButton)).nativeElement;

        spyOn(component.searchApply, 'emit');
        searchButtonElement.click();

        expect(component.searchApply.emit)
          .toHaveBeenCalled();
      });
    });
  });
});
