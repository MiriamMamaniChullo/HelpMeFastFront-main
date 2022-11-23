import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Interes } from 'src/app/model/interes';
import { InteresService } from 'src/app/service/interes.service';

@Component({
  selector: 'app-interes-reporte',
  templateUrl: './interes-reporte.component.html',
  styleUrls: ['./interes-reporte.component.css']
})
export class InteresReporteComponent implements OnInit {
  dataSource:MatTableDataSource<Interes>=new MatTableDataSource();
  displayedColumns:string[]=['id','levelInteres','AdultoJoven', 'Anuncio']
  constructor(private iService:InteresService) { }

  ngOnInit(): void {
    this.iService.reporte().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
