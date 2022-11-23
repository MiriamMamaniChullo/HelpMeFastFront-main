import { AnuncioDialogoComponent } from './anuncio-dialogo/anuncio-dialogo.component';
import { AnuncioService } from './../../../service/anuncio.service';
import { Anuncio } from './../../../model/anuncio';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-anuncio-listar',
  templateUrl: './anuncio-listar.component.html',
  styleUrls: ['./anuncio-listar.component.css']
})
export class AnuncioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Anuncio>= new MatTableDataSource();
  displayedColumns:string[]=['idAnuncio','preServicio','fechaPublicacion','servicio','accion1','accion2'];
  private idMayor:number=0;
  constructor(private aS:AnuncioService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.aS.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.aS.getLista().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    });
    this.aS.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor):false;
    });
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(AnuncioDialogoComponent);
  }
  eliminar(id:number){
    this.aS.eliminar(id).subscribe(()=>{
      this.aS.listar().subscribe(data=>{
        this.aS.setLista(data);
      })
    })
  }

}
