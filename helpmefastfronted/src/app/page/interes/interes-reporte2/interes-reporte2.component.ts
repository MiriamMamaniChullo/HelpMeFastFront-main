import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoAngello } from 'src/app/model/resultadoAngello';
import { InteresService } from 'src/app/service/interes.service';

@Component({
  selector: 'app-interes-reporte2',
  templateUrl: './interes-reporte2.component.html',
  styleUrls: ['./interes-reporte2.component.css']
})
export class InteresReporte2Component implements OnInit {
  lista: ResultadoAngello[] = [];
  dataSource:MatTableDataSource<ResultadoAngello>=new MatTableDataSource();
  displayedColumns:string[]=['nivel','cantidad','paciente']
  constructor(private iService:InteresService) { }

  ngOnInit(): void {
    this.iService.reporte2().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}