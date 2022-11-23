import { Subject, EMPTY } from 'rxjs';
import { AdultoJoven } from './../model/adultoJoven';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdultoJovenService {
 url: string = "https://help-me-fast.herokuapp.com/adultojoven/";
private listaCambio = new Subject<AdultoJoven[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<AdultoJoven[]>(this.url);
  }

  insertar(AdultoJoven: AdultoJoven) {
    return this.http.post(this.url, AdultoJoven);
  }

  setLista(listaNueva: AdultoJoven[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(AdultoJoven: AdultoJoven) {
    return this.http.put(this.url, AdultoJoven);
  }

  listarId(id: number) {
    return this.http.get<AdultoJoven>(`${this.url}/${id}`);
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

  buscarAdultoMayor(){
    return this.http.get<AdultoJoven[]>(`${this.url}/buscarpersonasdeterceraedad`);
  }

  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<AdultoJoven[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
