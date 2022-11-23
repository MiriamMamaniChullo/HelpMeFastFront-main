import { AdultoJoven } from './../../../model/adultoJoven';
import { AdultoJovenService } from './../../../service/adulto-joven.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulto-joven-buscar',
  templateUrl: './adulto-joven-buscar.component.html',
  styleUrls: ['./adulto-joven-buscar.component.css']
})
export class AdultoJovenBuscarComponent implements OnInit {

    textoBuscar: string ="";

  constructor(private AdultoJovenService: AdultoJovenService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: AdultoJoven[] = [];
    this.AdultoJovenService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.AdultoJovenService.setLista(array);
    })
  }

}

