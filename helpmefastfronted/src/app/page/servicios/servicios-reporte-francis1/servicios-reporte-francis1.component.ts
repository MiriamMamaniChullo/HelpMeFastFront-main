import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaFrancis } from 'src/app/model/respuestaFrancis';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-servicios-reporte-francis1',
  templateUrl: './servicios-reporte-francis1.component.html',
  styleUrls: ['./servicios-reporte-francis1.component.css']
})
export class ServiciosReporteFrancis1Component {

  lista: RespuestaFrancis[] = [];
  dataSource: MatTableDataSource<RespuestaFrancis> = new MatTableDataSource();
  displayedColumns: string[] = ['enfermero', 'cantidad'];
  constructor( private vService:ServiciosService) { }

  ngOnInit(): void {
    this.vService.buscarCantidadServicios().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
    })
  }
}