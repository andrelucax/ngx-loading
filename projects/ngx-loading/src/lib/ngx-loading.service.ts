import { Inject, Injectable, Optional } from '@angular/core';
import type { ILacLoadingConfig } from './ngx-loading-config';
import { LacLoadingConfig } from './ngx-loading-config';

@Injectable({
  providedIn: 'root',
})
export class LacLoadingService {
  public loadingConfig: ILacLoadingConfig;

  constructor(
    @Optional() @Inject('loadingConfig') private config: ILacLoadingConfig
  ) {
    this.loadingConfig = this.config || new LacLoadingConfig();
  }
}
