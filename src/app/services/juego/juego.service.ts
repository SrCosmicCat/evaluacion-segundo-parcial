import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Juego from '../../models/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private firestore:AngularFirestore) { }

  // Retornar todos los documentos de la colección
  getJuegos() {
    return this.firestore.collection('juegos').snapshotChanges();
  }

  // Insertar un documento
  createJuego(juego: Juego) {
    return this.firestore.collection('juegos').add(Object.assign({}, juego));
  }

  updateJuego(juego: Juego) {
    this.firestore.doc('juegos/'+juego.id).update(juego);
  }

  deleteJuego(id: string) {
    this.firestore.doc('juegos/'+id).delete();
  }
}
