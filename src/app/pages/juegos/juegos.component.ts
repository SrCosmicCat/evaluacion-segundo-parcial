import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego/juego.service';
import Juego from '../../models/juego';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent implements OnInit{
  juegos : Juego[] = [];
  juego = new Juego();
  

  constructor(private juegoService: JuegoService){}

  ngOnInit(): void {
    this.juegoService.getJuegos().subscribe(data => {
      this.juegos = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Juego,
          id: doc.payload.doc.id
        }
      })
    })
  }

  insertarJuego() {
    this.juegoService.createJuego(this.juego);
    this.juego = new Juego()
  }

  //Seleccionar un juego de la tabla
  selectJuego(juego: Juego) {
    this.juego = juego;
  }

  updateJuego() {
    this.juegoService.updateJuego(this.juego);
    this.juego = new Juego();
  }

  deleteJuego(id: string) {
    this.juegoService.deleteJuego(id);
    this.juego = new Juego();
  }

}
