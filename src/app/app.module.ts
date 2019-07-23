import { ThemeService } from './helpers/services/theme.service';
import { RefreshTokenService } from './helpers/interceptors/refreshToken.Service';
import { RefreshTokenInterceptor } from './helpers/interceptors/refreshToken.interceptor';
import { TokenInterceptor } from './helpers/interceptors/token.interceptor';
import { HTTPListener } from './helpers/interceptors/httpLoader.interceptor';
import { LoginService } from './modules/login/login.service';
import { AuthenticationService } from './helpers/authentication.service';
import { SharedModule } from './shared/module/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from 'src/app/helpers/error-handler';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    ToastrModule.forRoot({
      maxOpened: 5
    }),
    TranslateModule.forRoot()
  ],
  providers: [
    RefreshTokenService,
    AuthenticationService,
    ThemeService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
