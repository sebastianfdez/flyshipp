import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flyshipp';

  constructor(
    private analytics: AngularFireAnalytics,
  ) {
    this.analytics.logEvent('page_init_event');
  }
}
