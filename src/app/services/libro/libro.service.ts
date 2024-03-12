import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Libro from '../../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  // Retornar todos los documentos de la colección
  getLibros() {
    return this.firestore.collection('libros').snapshotChanges();
  }

  // Insertar un documento
  createLibro(libro: Libro) {
    return this.firestore.collection('libros').add(Object.assign({}, libro));
  }

  updateLibro(libro: Libro) {
    this.firestore.doc('libros/'+libro.id).update(libro);
  }

  deleteLibro(id: string) {
    this.firestore.doc('libros/'+id).delete();
  }
}
