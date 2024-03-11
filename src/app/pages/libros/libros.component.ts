import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import Libro from '../../models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  libros : Libro[] = [];
  libro = new Libro();
  

  constructor(private libroService: LibroService){}

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(data => {
      this.libros = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Libro,
          id: doc.payload.doc.id
        }
      })
    })
  }

  insertarLibro() {
    this.libroService.createLibro(this.libro);
    this.libro = new Libro()
  }

  //Seleccionar un libro de la tabla
  selectLibro(libro: Libro) {
    this.libro = libro;
  }

  updateLibro() {
    this.libroService.updateLibro(this.libro);
    this.libro = new Libro();
  }

  deleteLibro(id: string) {
    this.libroService.deleteLibro(id);
    this.libro = new Libro();
  }
}
