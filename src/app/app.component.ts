import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { CommitteesPage } from '../pages/committees/committees';
import { CoursePage } from "../pages/course/course";
import { EaccmePage } from "../pages/eaccme/eaccme";
import { ProgramPage } from "../pages/program/program";
import { VenuePage } from "../pages/venue/venue";
import { SponsorsPage } from "../pages/sponsors/sponsors";
import { ScientificsupportPage } from '../pages/scientificsupport/scientificsupport';
import { WelcomePage } from '../pages/welcome/welcome';

import { FcmProvider } from '../providers/fcm/fcm';

import { ToastController } from 'ionic-angular';
// import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    ) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
      { title: 'Welcome', component: WelcomePage },
      { title: 'Committees', component: CommitteesPage },
      { title: 'Course', component: CoursePage },
      { title: 'EACCME', component: EaccmePage },
      { title: 'Program', component: ProgramPage },
      { title: 'Venue', component: VenuePage },
      { title: 'Sponsors', component: SponsorsPage },
      { title: 'Scientific', component: ScientificsupportPage }
    ];

    platform.ready().then(() => {
      // Get a FCM token
      fcm.getToken();

      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
