import { AdultoJovenDialogoComponent } from './../adulto-joven-dialogo/adulto-joven-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { AdultoJovenService } from './../../../service/adulto-joven.service';
import { AdultoJoven } from './../../../model/adultoJoven';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulto-joven-listar',
  templateUrl: './adulto-joven-listar.component.html',
  styleUrls: ['./adulto-joven-listar.component.css']
})
export class AdultoJovenListarComponent implements OnInit {

  dataSource:MatTableDataSource<AdultoJoven>=new MatTableDataSource();
  displayedColumns:string[]=['id', 'nombre','apellido','edad', 'DNI', 'celular', 'email', 'direccion', 'accion1','accion2']
  private idMayor: number = 0;
  constructor(private pS:AdultoJovenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.pS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AdultoJovenDialogoComponent);
  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.listar().subscribe(data => {
        this.pS.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
