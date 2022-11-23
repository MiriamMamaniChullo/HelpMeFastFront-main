import { HttpClient } from '@angular/common/http';
import { Interes } from './../model/interes';
import { Subject, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resultadonivelalto } from '../model/resultadonivelalto';
import { ResultadoAngello } from '../model/resultadoAngello';

@Injectable({
  providedIn: 'root'
})
export class InteresService {
  url: string = "https://help-me-fast.herokuapp.com/interes/"
  private listaCambio = new Subject<Interes[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Interes[]>(this.url);
  }
  insertar(interes: Interes) {
    return this.http.post(this.url, interes);
  }
  setLista(listaNueva: Interes[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(interes: Interes) {
    return this.http.put(this.url, interes);
  }
  listarId(id: number) {
    return this.http.get<Interes>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  interesAltoPaciente(){
    return this.http.get<Resultadonivelalto[]>(`${this.url}/nivelaltopacienteservicio`);
  }


  reporte(){
    return this.http.get<Interes[]>(`${this.url}/buscarnivel`);
  }


  reporte2(){
    return this.http.get<ResultadoAngello[]>(`${this.url}/cantidadAnuncio`);
  }



  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Interes[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}

