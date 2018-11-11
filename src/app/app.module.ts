import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { CommitteesPage } from '../pages/committees/committees';
import { CoursePage } from "../pages/course/course";
import { EaccmePage } from "../pages/eaccme/eaccme";
import { ProgramPage } from "../pages/program/program";
import { VenuePage } from "../pages/venue/venue";
import { SponsorsPage } from "../pages/sponsors/sponsors";
import { ScientificsupportPage } from '../pages/scientificsupport/scientificsupport';
import { WelcomePage } from '../pages/welcome/welcome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Calendar } from '@ionic-native/calendar';

import { Pro } from '@ionic/pro';

Pro.init('92d6957b', {
  appVersion: '1.0.5'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    HomePage,
    ListPage,
    CommitteesPage,
    CoursePage,
    EaccmePage,
    ProgramPage,
    VenuePage,
    SponsorsPage,
    ScientificsupportPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    HomePage,
    ListPage,
    CommitteesPage,
    CoursePage,
    EaccmePage,
    ProgramPage,
    VenuePage,
    SponsorsPage,
    ScientificsupportPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    Calendar,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
