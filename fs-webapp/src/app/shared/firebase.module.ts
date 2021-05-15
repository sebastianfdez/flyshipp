import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseKeys } from '../../../firebase-keys';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseKeys),
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
  ],
  exports: [
    AngularFireStorageModule,
  ],
})
export class FirebaseModule { }