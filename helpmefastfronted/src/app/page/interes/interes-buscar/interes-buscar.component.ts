import { Interes } from './../../../model/interes';
import { InteresService } from './../../../service/interes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interes-buscar',
  templateUrl: './interes-buscar.component.html',
  styleUrls: ['./interes-buscar.component.css']
})
export class InteresBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private interesService: InteresService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Interes[] = [];
    this.interesService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.levelInteres.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.interesService.setLista(array);
    })
  }
}
