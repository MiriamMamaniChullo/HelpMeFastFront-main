import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Enfermero } from './../model/enfermero';
import { ResultadoPatrick } from '../model/resultadoPatrick';

@Injectable({
  providedIn: 'root'
})
export class EnfermeroService {
  url:string="https://help-me-fast.herokuapp.com/enfermeros/";
  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Enfermero[]>()

  constructor(private http:HttpClient) { }

  listar()
  {
      return this.http.get<any>(this.url);
  }
  insertar(enfermero: Enfermero) {
    return this.http.post(this.url, enfermero);
  }
  setLista(listaNueva: Enfermero[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(enfermero: Enfermero) {
    return this.http.put(this.url , enfermero);
  }
  listarId(id: number) {
    return this.http.get<Enfermero>(`${this.url}/${id}`);
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


  reporte(){
    return this.http.get<Enfermero[]>(`${this.url}/buscarEdad`)
  }

  reporte2(){
    return this.http.get<ResultadoPatrick[]>(`${this.url}/enfermerosxServicios`)
  }


  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Enfermero[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
