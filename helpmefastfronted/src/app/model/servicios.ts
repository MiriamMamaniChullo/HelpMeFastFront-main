import { Enfermero } from './enfermero';
import { Distrito } from './distrito';

export class Servicios{
    idServicios: number=0;
    nameServicios: string="";
    descServicios: string="";

    enfermero:Enfermero=new Enfermero();
    distrito:Distrito=new Distrito();
}