import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoFrancis } from 'src/app/model/resultadoFrancis';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-servicios-reporte-francis2',
  templateUrl: './servicios-reporte-francis2.component.html',
  styleUrls: ['./servicios-reporte-francis2.component.css']
})
export class ServiciosReporteFrancis2Component {
  dataSource: MatTableDataSource<ResultadoFrancis> = new MatTableDataSource();
  displayedColumns: string[] = ['distrito', 'cantidad'];
  constructor(private sS:ServiciosService) { }

  ngOnInit(): void {
    this.sS.buscaranuncios().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
