import { Enfermero } from './../../../model/enfermero';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EnfermeroService } from 'src/app/service/enfermero.service';
import { EnfermeroDialogoComponent } from './enfermero-dialogo/enfermero-dialogo.component';

@Component({
  selector: 'app-enfermero-listar',
  templateUrl: './enfermero-listar.component.html',
  styleUrls: ['./enfermero-listar.component.css']
})
export class EnfermeroListarComponent implements OnInit {
  lista: Enfermero[] = [];
  dataSource: MatTableDataSource<Enfermero> = new MatTableDataSource();
  displayedColumns: string[] = ['id','name','dni', 'edad', 'numero', 'email', 'CIP', 'actualizar', 'eliminar'];
  private idMayor: number = 0;
  constructor(private es: EnfermeroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.es.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.es.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.es.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EnfermeroDialogoComponent);
  }

  eliminar(id: number) {
    this.es.eliminar(id).subscribe(() => {
      this.es.listar().subscribe(data => {
        this.es.setLista(data);
      });
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}

