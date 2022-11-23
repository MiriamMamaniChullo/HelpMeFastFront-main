import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from '../model/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  url:string="https://help-me-fast.herokuapp.com/comentarios/";
  private confirmaEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Comentarios[]>()

  constructor(private http:HttpClient) { }

  listar()
  {
      return this.http.get<any>(this.url);
  }
  insertar(comentario: Comentarios) {
    return this.http.post(this.url, comentario);
  }
  setLista(listaNueva: Comentarios[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(comentario: Comentarios) {
    return this.http.put(this.url, comentario);
  }
  listarId(id: number) {
    return this.http.get<Comentarios>(`${this.url}/${id}`);
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
      return this.http.post<Comentarios[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
