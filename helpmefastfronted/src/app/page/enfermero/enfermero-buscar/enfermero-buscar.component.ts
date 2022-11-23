import { Component, OnInit } from '@angular/core';
import { Enfermero } from 'src/app/model/enfermero';
import { EnfermeroService } from 'src/app/service/enfermero.service';

@Component({
  selector: 'app-enfermero-buscar',
  templateUrl: './enfermero-buscar.component.html',
  styleUrls: ['./enfermero-buscar.component.css']
})
export class EnfermeroBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private enfermeroService: EnfermeroService) { }


  ngOnInit(): void {
  }
  buscar(e: any) {
   let array:Enfermero[]=[];
   this.enfermeroService.listar().subscribe(data => {
    data.forEach((element: { nameEnfermero: string | any[]; }, index: string | number) => {
      if (element.nameEnfermero.includes(e.target.value))
      {
        array.push(data[index]);
      }
      this.enfermeroService.setLista(array);
    });
   })
  }
}

