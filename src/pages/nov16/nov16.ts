import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the Nov16Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nov16',
  templateUrl: 'nov16.html',
})
export class Nov16Page {

  constructor(public navCtrl: NavController, private calendar: Calendar, public navParams: NavParams) {
  }
 
  addEvent(title, location, notes, startH, endH) {
    var startDate = new Date('2018-11-16T'+ startH);
    var endDate   = new Date('2018-11-16T'+ endH);

    this.calendar.createEventInteractively(title, location, notes, startDate, endDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nov16Page');
  }

}
