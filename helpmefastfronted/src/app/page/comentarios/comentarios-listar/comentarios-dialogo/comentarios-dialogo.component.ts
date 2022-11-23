import { ComentariosService } from './../../../../service/comentarios.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentarios-dialogo',
  templateUrl: './comentarios-dialogo.component.html',
  styleUrls: ['./comentarios-dialogo.component.css']
})
export class ComentariosDialogoComponent implements OnInit {

  constructor(private comentarioService:ComentariosService,
    private dialogref: MatDialogRef<ComentariosDialogoComponent>
  ) { }

  ngOnInit(): void { }
  confirmar(estado:boolean){
    this.comentarioService.setConfirmaEliminacion(estado);
    this.dialogref.close();
  }

}
