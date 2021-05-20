import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FSHomepageComponent } from './home-page.component';
import { FSMenuBarComponent } from './fs-menu-bar/fs-menu-bar.component';
import { FsFooterComponent } from './fs-footer/fs-footer.component';

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
    FSMenuBarComponent,
    FsFooterComponent,
  ],
  providers: [],
})
export class HomePageModule { }
