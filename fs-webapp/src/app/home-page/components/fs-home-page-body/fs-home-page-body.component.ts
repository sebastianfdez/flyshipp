import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'fs-home-page-body',
  templateUrl: 'fs-home-page-body.component.html',
  animations: [
    trigger('appear', [
      state('hidden', style({
        transform: 'translateX(-100vw)',
      })),
      state('show', style({
        transform: 'translateX(0)',
      })),
      transition('hidden => show', [
        animate('0.85s')
      ]),
    ]),
  ],
})

export class FSHomePageBodyComponent {
  imagePath = 'flyshipp.png';

  section2image = 'delivery-man.png';

  showFirstImage = false;

  constructor() {
    setTimeout(() => {
      this.showFirstImage = true;
    }, 200);
  }
}
