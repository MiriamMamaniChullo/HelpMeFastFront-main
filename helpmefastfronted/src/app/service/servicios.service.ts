import { Servicios } from './../model/servicios';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { RespuestaFrancis } from '../model/respuestaFrancis';
import { ResultadoFrancis } from '../model/resultadoFrancis';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
url:string="https://help-me-fast.herokuapp.com/servicios/";
private listaCambio=new Subject<Servicios[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Servicios[]>(this.url);
  }
  insertar(servicios:Servicios){
    return this.http.post(this.url, servicios);
  }
  setlista(listaNueva:Servicios[]){
    this.listaCambio.next(listaNueva);
  }
  getlista(){
    return this.listaCambio.asObservable();
  }
  modificar(servicios: Servicios) {
    return this.http.put(this.url, servicios);
  }
  listarId(id: number) {
    return this.http.get<Servicios>(`${this.url}/${id}`);
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


  buscarCantidadServicios(){
    return this.http.get<RespuestaFrancis[]>(`${this.url}/reporteFrancis`);
  }

  buscaranuncios(){
    return this.http.get<ResultadoFrancis[]>(`${this.url}/cantidadFrancis`);
  }

  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Servicios[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
