import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoPatrick } from 'src/app/model/resultadoPatrick';
import { EnfermeroService } from 'src/app/service/enfermero.service';

@Component({
  selector: 'app-enfermero-reporte2',
  templateUrl: './enfermero-reporte2.component.html',
  styleUrls: ['./enfermero-reporte2.component.css']
})
export class EnfermeroReporte2Component implements OnInit{
  dataSource: MatTableDataSource <ResultadoPatrick> = new MatTableDataSource();
  displayedColumns:string[]=['nombre','codigo','edad', 'numero', 'especialidad']
  constructor(private es: EnfermeroService) { }

  ngOnInit(): void {
    this.es.reporte2().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
