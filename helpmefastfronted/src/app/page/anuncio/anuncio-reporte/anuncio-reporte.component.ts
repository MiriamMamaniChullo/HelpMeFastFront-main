import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Anuncio } from 'src/app/model/anuncio';
import { AnuncioService } from 'src/app/service/anuncio.service';

@Component({
  selector: 'app-anuncio-reporte',
  templateUrl: './anuncio-reporte.component.html',
  styleUrls: ['./anuncio-reporte.component.css']
})
export class AnuncioReporteComponent implements OnInit{
  dataSource:MatTableDataSource<Anuncio>= new MatTableDataSource();
  displayedColumns:string[]=['idAnuncio','preServicio','fechaPublicacion','servicio'];
  constructor(private aS:AnuncioService) { }

  ngOnInit(): void {
   this.aS.reporte().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
   })
  }

}