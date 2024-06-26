import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  loadFeatured(){
    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>{
          const  data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {data , id};
        })
      })
    )
}

loadLatest(){
  return this.afs.collection('posts', ref => ref.orderBy('createdAt') ).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a =>{
        const  data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {data , id};
      })
    })
  )
}

loadCategoryPosts(categoryId: any) {
  return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a =>{
        const  data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {data , id};
      })
    })
  )
}

loadSinglePost(postId: any) {
  return this.afs.doc(`posts/${postId}`).valueChanges();
}

loadSimilar(categoryId){
  return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a =>{
        const  data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {data , id};
      })
    })
  )
}

countViews(postId){
  const viewsCount = {
    views: firebase.firestore.FieldValue.increment(1)
  };
  this.afs.doc(`posts/${postId}`).update(viewsCount).then(() => {
    console.log('views count updated');
  });
}
}