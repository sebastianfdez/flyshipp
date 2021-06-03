import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {
  apiKeyDev,
  authDomainDev,
  projectIdDev,
  storageBucketDev,
  messagingSenderIdDev,
  appIdDev,
  apiKeyProd,
  authDomainProd,
  projectIdProd,
  storageBucketProd,
  messagingSenderIdProd,
  appIdProd,
  measurementIdProd,
} from '../../../firebase-keys';
import { environment } from '../../environments/environment';
import { FirebaseService } from './services/firebase.service';

const environmentDev = {
  apiKey: apiKeyDev,
  authDomain: authDomainDev,
  projectId: projectIdDev,
  storageBucket: storageBucketDev,
  messagingSenderId: messagingSenderIdDev,
  appId: appIdDev,
}

const environmentProd = {
  apiKey: apiKeyProd,
  authDomain: authDomainProd,
  projectId: projectIdProd,
  storageBucket: storageBucketProd,
  messagingSenderId: messagingSenderIdProd,
  appId: appIdProd,
  measurementId: measurementIdProd,
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.production ? environmentProd : environmentDev ),
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
  ],
  exports: [
    AngularFireStorageModule,
  ],
  providers: [
    FirebaseService,
  ],
})
export class FirebaseModule { }