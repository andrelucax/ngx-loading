import type { DebugElement } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  lacLoadingAnimationTypes,
  LacLoadingConfig,
} from './ngx-loading-config';
import { LacLoadingComponent } from './ngx-loading.component';
import { LacLoadingService } from './ngx-loading.service';

let ngxLoadingServiceStub: Partial<LacLoadingService>;

describe('NgxLoadingComponent', () => {
  let component: LacLoadingComponent;
  let fixture: ComponentFixture<LacLoadingComponent>;

  beforeEach(async () => {
    // stub NgxLoadingService for test purposes
    ngxLoadingServiceStub = {
      loadingConfig: new LacLoadingConfig(),
    };

    await TestBed.configureTestingModule({
      declarations: [LacLoadingComponent],
      providers: [
        { provide: LacLoadingService, useValue: ngxLoadingServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacLoadingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    expect(component.show).toBe(false);
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeFalsy();
  });

  it('should show loading screen when show is set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeTruthy();
  });

  it('should show the three bounce animation by default once show set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.spinner-three-bounce'))).toBeTruthy();
  });

  it('should show the correct animation when set once show set to true', () => {
    [
      {
        animation: lacLoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: lacLoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: lacLoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: lacLoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: lacLoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: lacLoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: lacLoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: lacLoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const config = new LacLoadingConfig();
      config.animationType = animation;
      component.config = config;
      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });

  it('should show the correct animation when set at the service level and show set to true', () => {
    [
      {
        animation: lacLoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: lacLoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: lacLoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: lacLoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: lacLoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: lacLoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: lacLoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: lacLoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: lacLoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const ngxLoadingService = TestBed.inject(LacLoadingService);
      const ngxLoadingConfig = new LacLoadingConfig();
      ngxLoadingConfig.animationType = animation;
      ngxLoadingConfig.backdropBackgroundColour = '#ffffff';
      ngxLoadingConfig.backdropBorderRadius = '1px';
      ngxLoadingConfig.fullScreenBackdrop = true;
      ngxLoadingConfig.primaryColour = '#00ffff';
      ngxLoadingConfig.secondaryColour = '#ff00ff';
      ngxLoadingConfig.tertiaryColour = '#ffff00';

      ngxLoadingService.loadingConfig = ngxLoadingConfig;

      fixture = TestBed.createComponent(LacLoadingComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();

      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(component.config.animationType).toEqual(
        ngxLoadingConfig.animationType
      );
      expect(component.config.backdropBackgroundColour).toEqual(
        ngxLoadingConfig.backdropBackgroundColour
      );
      expect(component.config.backdropBorderRadius).toEqual(
        ngxLoadingConfig.backdropBorderRadius
      );
      expect(component.config.fullScreenBackdrop).toEqual(
        ngxLoadingConfig.fullScreenBackdrop
      );
      expect(component.config.primaryColour).toEqual(
        ngxLoadingConfig.primaryColour
      );
      expect(component.config.secondaryColour).toEqual(
        ngxLoadingConfig.secondaryColour
      );
      expect(component.config.tertiaryColour).toEqual(
        ngxLoadingConfig.tertiaryColour
      );
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });
});
