import { Servicios } from './../../../model/servicios';
import { ServiciosService } from './../../../service/servicios.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource}from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import {ServiciosDialogoComponent} from './servicios-dialogo/servicios-dialogo.component'

@Component({
  selector: 'app-servicios-listar',
  templateUrl: './servicios-listar.component.html',
  styleUrls: ['./servicios-listar.component.css']
})
export class ServiciosListarComponent implements OnInit {
  lista : Servicios[]=[];
  dataSource: MatTableDataSource<Servicios> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nameServicios','descServicios', 'distrito', 'enfermero', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private sS:ServiciosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sS.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.sS.getlista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.sS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ServiciosDialogoComponent);
  }
  eliminar(id: number) {
    this.sS.eliminar(id).subscribe(() => {
      this.sS.listar().subscribe(data => {
        this.sS.setlista(data);
      });
    });

  }
}
