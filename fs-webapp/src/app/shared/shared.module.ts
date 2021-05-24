import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FirebaseModule } from './firebase.module';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
