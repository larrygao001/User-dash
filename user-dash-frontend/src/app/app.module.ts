import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './routing/app.routing';

import { RDSService, TitleService } from './services/client/index';
import { NotificationService } from './services/notification.service';
import { HttpService } from './services/client/http.interceptor';
import { httpServiceFactory } from './services/client/httpServiceFactory';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { ChartsModule } from 'ng2-charts';

import { ChartModule } from 'angular-highcharts';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ClFooterComponent } from './components/client/cl-footer/cl-footer.component';
import { ClHeaderComponent } from './components/client/cl-header/cl-header.component';
import { ClHomeComponent } from './components/client/cl-home/cl-home.component';
import { ClLandingComponent } from './components/client/cl-landing/cl-landing.component';
import { ClContainerComponent } from './components/client/cl-container/cl-container.component';
import { RDDataComponent } from './components/client/rd-data/rd-data.component';
import { RDListComponent } from './components/client/rd-list/rd-list.component';


@NgModule({
  declarations: [
    AppComponent,

    ClFooterComponent,
    ClHeaderComponent,
    ClHomeComponent,
    ClLandingComponent,
    ClContainerComponent,
    RDDataComponent,
    RDListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEk3pZz3v81F7Cr28OQOajy1jW05gdJV8',
      libraries: ['places']
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ChartsModule,
    Ng4LoadingSpinnerModule,

    ChartModule
  ],
  providers: [
    RDSService,
    HttpService,
    Store,
    NotificationService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
