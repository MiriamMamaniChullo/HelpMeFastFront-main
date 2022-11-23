import { Component, OnInit } from '@angular/core';
import { ServiciosService} from 'src/app/service/servicios.service';
import { Servicios } from 'src/app/model/servicios';

@Component({
  selector: 'app-servicios-buscar',
  templateUrl: './servicios-buscar.component.html',
  styleUrls: ['./servicios-buscar.component.css']
})
export class ServiciosBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Servicios[] = [];
    this.serviciosService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descServicios.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.serviciosService.setlista(array);
    })
  }
}
