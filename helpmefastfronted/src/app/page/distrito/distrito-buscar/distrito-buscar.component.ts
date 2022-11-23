import { DistritoService } from 'src/app/service/distrito.service';
import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/model/distrito';

@Component({
  selector: 'app-distrito-buscar',
  templateUrl: './distrito-buscar.component.html',
  styleUrls: ['./distrito-buscar.component.css']
})
export class DistritoBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private distritoService: DistritoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:Distrito[]=[];
    this.distritoService.listar().subscribe(data => {
     data.forEach((element: { nameDistrito: string | any[]; }, index: string | number)=> {
       if (element.nameDistrito.includes(e.target.value))
       {
         array.push(data[index]);
       }
     });
     this.distritoService.setLista(array);
    })
   }
}

