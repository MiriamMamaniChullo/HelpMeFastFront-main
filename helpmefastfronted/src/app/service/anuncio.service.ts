import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';
import { Anuncio } from '../model/anuncio';
import { ResultadoMiriam } from '../model/resultadoMiriam';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  url:string="https://help-me-fast.herokuapp.com/anuncios/";
  private listaCambio= new Subject<Anuncio[]>()
  private confirmaEliminacion= new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Anuncio[]>(this.url);
  }
  insertar(anuncio:Anuncio){
    return this.http.post(this.url, anuncio);
  }
  setLista(listaNueva: Anuncio[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(anuncio:Anuncio){
    return this.http.put(this.url,anuncio);
  }
  listarId(id:number){
    return this.http.get<Anuncio>(`${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }


  reporte(){
    return this.http.get<Anuncio[]>(`${this.url}/buscarmes`);
  }

  reporte2(){
    return this.http.get<ResultadoMiriam[]>(`${this.url}/cantidadanuncioservicio`);
  }


  buscar(texto:string){
    if(texto.length !=0){
      return this.http.post<Anuncio[]>(`${this.url}/buscar`,texto.toLowerCase(),{
      });
    }
    return EMPTY;
  }

}

