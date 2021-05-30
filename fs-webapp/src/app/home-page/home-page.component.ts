import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-homepage',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FSHomepageComponent {}
