import { DistritoService } from 'src/app/service/distrito.service';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Distrito } from 'src/app/model/distrito';
import { DistritoDialogoComponent } from './distrito-dialogo/distrito-dialogo.component';

@Component({
  selector: 'app-distrito-listar',
  templateUrl: './distrito-listar.component.html',
  styleUrls: ['./distrito-listar.component.css']
})
export class DistritoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Distrito>=new MatTableDataSource();
  displayedColumns: string[] = ['idComentario','Distrito', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private Ds: DistritoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Ds.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Ds.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Ds.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistritoDialogoComponent);
  }

  eliminar(id: number) {
    this.Ds.eliminar(id).subscribe(() => {
      this.Ds.listar().subscribe(data => {
        this.Ds.setLista(data);
      });
    });

  }

}
