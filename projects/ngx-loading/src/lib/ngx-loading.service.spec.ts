import { TestBed } from '@angular/core/testing';
import {
  lacLoadingAnimationTypes,
  LacLoadingConfig,
} from './ngx-loading-config';
import { LacLoadingService } from './ngx-loading.service';

describe('NgxLoadingService', () => {
  let service: LacLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LacLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use a default NgxLoadingConfig', () => {
    const ngxLoadingConfig = new LacLoadingConfig();
    expect(service.loadingConfig).toEqual(ngxLoadingConfig);
  });

  it('should use a custom NgxLoadingConfig when initialised with one', () => {
    const ngxLoadingConfig = new LacLoadingConfig();
    ngxLoadingConfig.animationType = lacLoadingAnimationTypes.cubeGrid;
    ngxLoadingConfig.backdropBackgroundColour = '#ffffff';
    ngxLoadingConfig.backdropBorderRadius = '1px';
    ngxLoadingConfig.fullScreenBackdrop = true;
    ngxLoadingConfig.primaryColour = '#00ffff';
    ngxLoadingConfig.secondaryColour = '#ff00ff';
    ngxLoadingConfig.tertiaryColour = '#ffff00';
    service = new LacLoadingService(ngxLoadingConfig);
    expect(service.loadingConfig).toEqual(ngxLoadingConfig);
  });
});
