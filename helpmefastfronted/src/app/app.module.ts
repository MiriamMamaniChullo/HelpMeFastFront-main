import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdultoJovenComponent } from './page/adulto-joven/adulto-joven.component';
import { AnuncioComponent } from './page/anuncio/anuncio.component';
import { ComentariosComponent } from './page/comentarios/comentarios.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { InteresComponent } from './page/interes/interes.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { AdultoJovenBuscarComponent } from './page/adulto-joven/adulto-joven-buscar/adulto-joven-buscar.component';
import { AdultoJovenDialogoComponent } from './page/adulto-joven/adulto-joven-dialogo/adulto-joven-dialogo.component';
import { AdultoJovenInsertarComponent } from './page/adulto-joven/adulto-joven-insertar/adulto-joven-insertar.component';
import { AdultoJovenListarComponent } from './page/adulto-joven/adulto-joven-listar/adulto-joven-listar.component';
import { AnuncioBuscarComponent } from './page/anuncio/anuncio-buscar/anuncio-buscar.component';
import { AnuncioCreaeditaComponent } from './page/anuncio/anuncio-creaedita/anuncio-creaedita.component';
import { AnuncioListarComponent } from './page/anuncio/anuncio-listar/anuncio-listar.component';
import { AnuncioDialogoComponent } from './page/anuncio/anuncio-listar/anuncio-dialogo/anuncio-dialogo.component';
import { ComentariosBuscarComponent } from './page/comentarios/comentarios-buscar/comentarios-buscar.component';
import { ComentariosListarComponent } from './page/comentarios/comentarios-listar/comentarios-listar.component';
import { ComentariosCreaeditaComponent } from './page/comentarios/comentarios-creaedita/comentarios-creaedita.component';
import { ComentariosDialogoComponent } from './page/comentarios/comentarios-listar/comentarios-dialogo/comentarios-dialogo.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { DistritoListarComponent } from './page/distrito/distrito-listar/distrito-listar.component';
import { DistritoDialogoComponent } from './page/distrito/distrito-listar/distrito-dialogo/distrito-dialogo.component';
import { EnfermeroComponent } from './page/enfermero/enfermero.component';
import { DistritoBuscarComponent } from './page/distrito/distrito-buscar/distrito-buscar.component';
import { EnfermeroBuscarComponent } from './page/enfermero/enfermero-buscar/enfermero-buscar.component';
import { EnfermeroCreaeditaComponent } from './page/enfermero/enfermero-creaedita/enfermero-creaedita.component';
import { EnfermeroListarComponent } from './page/enfermero/enfermero-listar/enfermero-listar.component';
import { EnfermeroDialogoComponent } from './page/enfermero/enfermero-listar/enfermero-dialogo/enfermero-dialogo.component';
import { InteresListarComponent } from './page/interes/interes-listar/interes-listar.component';
import { InteresBuscarComponent } from './page/interes/interes-buscar/interes-buscar.component';
import { InteresCreaeditaComponent } from './page/interes/interes-creaedita/interes-creaedita.component';
import { InteresDialogoComponent } from './page/interes/interes-listar/interes-dialogo/interes-dialogo.component';
import { ServiciosListarComponent } from './page/servicios/servicios-listar/servicios-listar.component';
import { ServiciosBuscarComponent } from './page/servicios/servicios-buscar/servicios-buscar.component';
import { ServiciosCreaeditaComponent } from './page/servicios/servicios-creaedita/servicios-creaedita.component';
import { ServiciosDialogoComponent } from './page/servicios/servicios-listar/servicios-dialogo/servicios-dialogo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AdultoJovenReporteComponent } from './page/adulto-joven/adulto-joven-reporte/adulto-joven-reporte.component';
import { InteresAltoPacienteServicioComponent } from './page/interes/interes-alto-paciente-servicio/interes-alto-paciente-servicio.component';
import { InteresReporteComponent } from './page/interes/interes-reporte/interes-reporte.component';
import { InteresReporte2Component } from './page/interes/interes-reporte2/interes-reporte2.component';
import { AnuncioReporteComponent } from './page/anuncio/anuncio-reporte/anuncio-reporte.component';
import { AnuncioReporte2Component } from './page/anuncio/anuncio-reporte2/anuncio-reporte2.component';
import { EnfermeroReporteComponent } from './page/enfermero/enfermero-reporte/enfermero-reporte.component';
import { EnfermeroReporte2Component } from './page/enfermero/enfermero-reporte2/enfermero-reporte2.component';
import {MatMenuModule} from '@angular/material/menu';
import { InicioComponent } from './page/inicio/inicio.component';
import { ServiciosReporteFrancis1Component } from './page/servicios/servicios-reporte-francis1/servicios-reporte-francis1.component';
import { ServiciosReporteFrancis2Component } from './page/servicios-reporte-francis2/servicios-reporte-francis2.component';



@NgModule({
  declarations: [
    AppComponent,
    AdultoJovenComponent,
    AnuncioComponent,
    ComentariosComponent,
    DistritoComponent,
    InteresComponent,
    ServiciosComponent,
    AdultoJovenBuscarComponent,
    AdultoJovenDialogoComponent,
    AdultoJovenInsertarComponent,
    AdultoJovenListarComponent,
    AnuncioBuscarComponent,
    AnuncioCreaeditaComponent,
    AnuncioListarComponent,
    AnuncioDialogoComponent,
    ComentariosBuscarComponent,
    ComentariosListarComponent,
    ComentariosCreaeditaComponent,
    ComentariosDialogoComponent,
    DistritoCreaeditaComponent,
    DistritoListarComponent,
    DistritoDialogoComponent,
    EnfermeroComponent,
    DistritoBuscarComponent,
    EnfermeroBuscarComponent,
    EnfermeroCreaeditaComponent,
    EnfermeroListarComponent,
    EnfermeroDialogoComponent,
    InteresListarComponent,
    InteresBuscarComponent,
    InteresCreaeditaComponent,
    InteresDialogoComponent,
    ServiciosListarComponent,
    ServiciosBuscarComponent,
    ServiciosCreaeditaComponent,
    ServiciosDialogoComponent,
    AdultoJovenReporteComponent,
    InteresAltoPacienteServicioComponent,
    InteresReporteComponent,
    InteresReporte2Component,
    AnuncioReporteComponent,
    AnuncioReporte2Component,
    EnfermeroReporteComponent,
    EnfermeroReporte2Component,
    InicioComponent,
    ServiciosReporteFrancis1Component,
    ServiciosReporteFrancis2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
