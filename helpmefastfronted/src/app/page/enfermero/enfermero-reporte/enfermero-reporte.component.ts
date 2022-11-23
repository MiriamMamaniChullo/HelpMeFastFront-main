import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Enfermero } from 'src/app/model/enfermero';
import { EnfermeroService } from 'src/app/service/enfermero.service';

@Component({
  selector: 'app-enfermero-reporte',
  templateUrl: './enfermero-reporte.component.html',
  styleUrls: ['./enfermero-reporte.component.css']
})
export class EnfermeroReporteComponent implements OnInit {
  lista: Enfermero[] = [];
  dataSource: MatTableDataSource<Enfermero> = new MatTableDataSource();
  displayedColumns: string[] = ['id_enfermero','cod_enfermero','dni_enfermero', 'edad_enfermero', 'email_enfermero','name_enfermero','num_enfermero'];
  constructor(private es: EnfermeroService) { }

  ngOnInit(): void {
      this.es.reporte().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      });
    }
  }
