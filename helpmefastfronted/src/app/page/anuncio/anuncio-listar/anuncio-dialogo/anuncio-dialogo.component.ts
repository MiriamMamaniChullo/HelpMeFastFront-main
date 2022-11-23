import { MatDialogRef } from '@angular/material/dialog';
import { AnuncioService } from './../../../../service/anuncio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-dialogo',
  templateUrl: './anuncio-dialogo.component.html',
  styleUrls: ['./anuncio-dialogo.component.css']
})
export class AnuncioDialogoComponent implements OnInit {

  constructor(private AnuncioService:AnuncioService,
    private dialogref: MatDialogRef<AnuncioDialogoComponent>
  ) { }

  ngOnInit(): void { }
  confirmar(estado:boolean){
    this.AnuncioService.setConfirmaEliminacion(estado);
    this.dialogref.close();
  }
}
