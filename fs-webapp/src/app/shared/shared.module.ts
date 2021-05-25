import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FirebaseModule } from './firebase.module';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarService } from './services/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatSnackBarModule,
];

@NgModule({
  imports: [
    ...materialModules,
    HttpClientModule,
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    SnackBarService,
  ],
  exports: [
    ...materialModules,
    FirebaseModule,
    NgbNavModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class SharedModule { }
