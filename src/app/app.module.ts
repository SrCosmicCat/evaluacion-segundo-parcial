import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './pages/libros/libros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AboutComponent } from './pages/about/about.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    ClientesComponent,
    AboutComponent,
    JuegosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
