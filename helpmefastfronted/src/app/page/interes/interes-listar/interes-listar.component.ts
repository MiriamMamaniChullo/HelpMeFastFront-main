import { InteresDialogoComponent } from './interes-dialogo/interes-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { InteresService } from './../../../service/interes.service';
import { Interes } from './../../../model/interes';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interes-listar',
  templateUrl: './interes-listar.component.html',
  styleUrls: ['./interes-listar.component.css']
})
export class InteresListarComponent implements OnInit {
  lista: Interes[]=[];
  dataSource: MatTableDataSource<Interes> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'medida', 'adultoJoven', 'anuncio', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private ps: InteresService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(InteresDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }
}

