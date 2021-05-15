import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FSHomepageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FSHomepageComponent,
      }
    ]),
  ],
  declarations: [
    FSHomepageComponent,
  ],
  providers: [],
})
export class HomePageModule { }
