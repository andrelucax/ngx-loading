import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LacLoadingModule } from '../../../../projects/ngx-loading/src/lib/ngx-loading.module';
import { lacLoadingAnimationTypes } from '../../../../projects/ngx-loading/src/lib/ngx-loading-config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LacLoadingModule.forRoot({
      animationType: lacLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.3)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
