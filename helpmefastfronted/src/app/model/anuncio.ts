import { Servicios } from './servicios';

export class Anuncio{
  idAnuncio:number=0;
  precioServicio:number=0;
  fechaPublicacion:string="";
  servicio:Servicios=new Servicios();
}
