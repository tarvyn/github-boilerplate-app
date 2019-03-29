import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserControlComponent } from './user-control.component';

describe('UserControlComponent', () => {
  const selectors = {
    label: 'label.col-form-label',
    controlWrapper: '.control',
    controlInput: '.control input',
    controlLink: '.control a'
  };
  let component: UserControlComponent;
  let fixture: ComponentFixture<UserControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserControlComponent]
    })
    // Need to override detection strategy due to existing angular issue:
    // https://github.com/angular/angular/issues/12313#issuecomment-298697327
      .overrideComponent(
        UserControlComponent,
        {
          set: {
            changeDetection: ChangeDetectionStrategy.Default
          }
        }
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('component View', () => {
    it('should create', () => {
      expect(component)
        .toBeTruthy();
    });

    describe('label', () => {
      it('should display the same value as input', () => {
        component.label = 'fakeLabel';
        fixture.detectChanges();

        const labelElement = fixture.debugElement.query(By.css(selectors.label)).nativeElement;

        expect(labelElement.textContent.trim())
          .toBe('fakeLabel');
      });
    });

    describe('text input', () => {
      it('should be shown in case "value" input has been specified', () => {
        component.value = 'fakeValue';
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css(selectors.controlInput)).nativeElement;

        expect(input)
          .toBeTruthy();
      });

      it('should not be shown in case "value" input has not been specified', () => {
        component.value = undefined;
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css(selectors.controlInput));

        expect(input)
          .toBeNull();
      });

      it('should display the same value as input', () => {
        component.value = 'fakeValue';
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css(selectors.controlInput)).nativeElement;

        expect(input.value)
          .toBe('fakeValue');
      });
    });

    describe('link', () => {
      it('should be shown in case "href" input has been specified', () => {
        component.href = 'fakeHref';
        fixture.detectChanges();

        const link = fixture.debugElement.query(By.css(selectors.controlLink)).nativeElement;

        expect(link)
          .toBeTruthy();
      });

      it('should not be shown in case "href" input has not been specified', () => {
        component.href = undefined;
        fixture.detectChanges();

        const link = fixture.debugElement.query(By.css(selectors.controlLink));

        expect(link)
          .toBeNull();
      });

      it('should display the same value as input', () => {
        component.href = 'fakeHref';
        fixture.detectChanges();

        const link = fixture.debugElement.query(By.css(selectors.controlLink));

        expect(link.properties.href)
          .toBe('fakeHref');
      });
    });

    describe('control wrapper', () => {
      it('should apply label css class in case href input has been specified', () => {
        component.href = 'fakeHref';
        fixture.detectChanges();

        const controlWrapper = fixture.debugElement.query(By.css(selectors.controlWrapper)).nativeElement as HTMLElement;

        expect(controlWrapper.classList.contains('col-form-label'))
          .toBeTruthy();
      });

      it('should not apply label css class in case href input has not been specified', () => {
        component.href = undefined;
        fixture.detectChanges();

        const controlWrapper = fixture.debugElement.query(By.css(selectors.controlWrapper)).nativeElement as HTMLElement;

        expect(controlWrapper.classList.contains('col-form-label'))
          .toBeFalsy();
      });
    });
  });
});
