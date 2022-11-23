import { Anuncio } from './../../../model/anuncio';
import { AnuncioService } from './../../../service/anuncio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-buscar',
  templateUrl: './anuncio-buscar.component.html',
  styleUrls: ['./anuncio-buscar.component.css']
})
export class AnuncioBuscarComponent implements OnInit {
  textoBuscar: string="";

  constructor(private anuncioService:AnuncioService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array:Anuncio[]=[];
    this.anuncioService.listar().subscribe(data=>{
      data.forEach((element, index)=>{
        if(element.servicio.descServicios.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.anuncioService.setLista(array);
    })
  }

}
