import { AdultoJovenService } from 'src/app/service/adulto-joven.service';
import { AdultoJoven } from './../../../model/adultoJoven';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-adulto-joven-reporte',
  templateUrl: './adulto-joven-reporte.component.html',
  styleUrls: ['./adulto-joven-reporte.component.css']
})
export class AdultoJovenReporteComponent implements OnInit{

  dataSource:MatTableDataSource<AdultoJoven>=new MatTableDataSource();
  displayedColumns:string[]=['idAdultoJoven','nombre','apellido','edad', 'celular']
  constructor(private ajService:AdultoJovenService) { }

  ngOnInit(): void {
    this.ajService.buscarAdultoMayor().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}

