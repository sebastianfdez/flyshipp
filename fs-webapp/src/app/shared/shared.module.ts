import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FirebaseModule } from './firebase.module';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    HttpClientModule,
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
  ],
})
export class SharedModule { }
