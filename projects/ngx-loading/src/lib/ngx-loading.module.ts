import { CommonModule } from '@angular/common';
import type { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import type { ILacLoadingConfig } from './ngx-loading-config';
import { LacLoadingComponent } from './ngx-loading.component';
@NgModule({
  declarations: [LacLoadingComponent],
  imports: [CommonModule],
  exports: [LacLoadingComponent],
})
export class LacLoadingModule {
  static forRoot(
    loadingConfig: ILacLoadingConfig
  ): ModuleWithProviders<LacLoadingModule> {
    return {
      ngModule: LacLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }],
    };
  }
}
