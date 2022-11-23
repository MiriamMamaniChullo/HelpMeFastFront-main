import { Distrito } from './../model/distrito';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  url:string="https://help-me-fast.herokuapp.com/distritos/";
  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Distrito[]>()

  constructor(private http:HttpClient) { }

  listar()
  {
      return this.http.get<any>(this.url);
  }
  insertar(distrito: Distrito) {
    return this.http.post(this.url, distrito);
  }
  setLista(listaNueva: Distrito[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(distrito: Distrito) {
    return this.http.put(this.url , distrito);
  }
  listarId(id: number) {
    return this.http.get<Distrito>(`${this.url}/${id}`);
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
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Distrito[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
