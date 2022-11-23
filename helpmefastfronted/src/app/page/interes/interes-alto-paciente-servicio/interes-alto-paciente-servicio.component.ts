import { InteresService } from './../../../service/interes.service';
import { Resultadonivelalto } from './../../../model/resultadonivelalto';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-interes-alto-paciente-servicio',
  templateUrl: './interes-alto-paciente-servicio.component.html',
  styleUrls: ['./interes-alto-paciente-servicio.component.css']
})
export class InteresAltoPacienteServicioComponent implements OnInit{

  dataSource: MatTableDataSource<Resultadonivelalto> = new MatTableDataSource();
  displayedColumns: string[] = ['paciente', 'nivelinteres', 'nombreservicio', 'fechapublicacion', 'enfermero','cantidad'];
  constructor(private iS:InteresService) { }


  ngOnInit(): void {
    this.iS.interesAltoPaciente().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
