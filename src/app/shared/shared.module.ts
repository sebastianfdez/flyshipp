import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FirebaseModule } from './firebase.module';
import { FsFooterComponent } from './component/fs-footer.component';

@NgModule({
  declarations: [
    FsFooterComponent,
  ],
  imports: [
    HttpClientModule,
    FirebaseModule,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    FirebaseModule,
    FsFooterComponent,
  ],
})
export class SharedModule { }
