import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FSHomepageComponent } from './home-page.component';
import { FSMenuBarComponent } from './components/fs-menu-bar/fs-menu-bar.component';
import { FsFooterComponent } from './components/fs-footer/fs-footer.component';
import { FSHomePageBodyComponent } from './components/fs-home-page-body/fs-home-page-body.component';
import { FSShipperFormComponent } from './components/fs-shipper-form/fs-shipper-form.component';

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
    FSHomePageBodyComponent,
    FSShipperFormComponent,
  ],
  providers: [],
})
export class HomePageModule { }
