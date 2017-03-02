import { Component, ViewEncapsulation } from '@angular/core';
import { E2EPage } from '../pages/e2e-page/e2e-page'
@Component({
  templateUrl: 'main.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
    ion-tabs {
      margin-bottom: 20px;
      contain: none;
    }
    `,
    `
    ion-tabs,
    ion-tabs ion-tabbar {
      position: relative;
      top: auto;
      height: auto;
      visibility: visible;
      opacity: 1;
    }
    `
  ]
})
export class E2EApp {
  root = E2EPage;
  myBadge: number = 55;
}
