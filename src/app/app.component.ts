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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

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

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
