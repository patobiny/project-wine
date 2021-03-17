import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  
  wineCollection:AngularFirestoreCollection;
  userCollection:AngularFirestoreCollection=this.db.collection('users');

  addCheck(userId:string, color:string,alcohol:number, volatile:number, acidity:number, chlorides:number, density:number, result){
      const check = {
        color:color,
        alcohol:alcohol,
        volatile:volatile,
        acidity:acidity,
        chlorides:chlorides,
        density:density,
        result:result
      };
      console.log(userId);
      this.userCollection.doc(userId).collection('wines').add(check);

  }
  getWines(userId): Observable<any[]> {
    this.wineCollection = this.db.collection(`users/${userId}/wines`, 
       ref => ref.orderBy('alcohol', 'desc'));
    return this.wineCollection.snapshotChanges();
  } 
  deleteWine(userId:string, id:string){
    this.db.doc(`users/${userId}/wines/${id}`).delete();

  }

  constructor(private db:AngularFirestore) { }
}
