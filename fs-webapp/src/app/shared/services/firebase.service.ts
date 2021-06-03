import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FirebaseService {
  constructor(
    private afs: AngularFirestore,
  ) { }
  
  getCollection<T>(path: string): AngularFirestoreCollection<T> {
    return this.afs.collection<T>(path);
  }

  addToCollection<T>(item: T, path: string): Observable<DocumentReference<T>> {
    return from(this.afs.collection<T>(path).add(item));
  }
}
