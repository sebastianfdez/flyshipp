import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseKeysProd, firebaseKeysDev } from '../../../firebase-keys';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.production ? firebaseKeysProd : firebaseKeysDev ),
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
  ],
  exports: [
    AngularFireStorageModule,
  ],
})
export class FirebaseModule { }