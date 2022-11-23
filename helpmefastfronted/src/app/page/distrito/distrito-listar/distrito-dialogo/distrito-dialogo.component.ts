import { DistritoService } from 'src/app/service/distrito.service';

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-distrito-dialogo',
  templateUrl: './distrito-dialogo.component.html',
  styleUrls: ['./distrito-dialogo.component.css']
})
export class DistritoDialogoComponent implements OnInit {

  constructor(private DistritoService: DistritoService,
    private dialogRef: MatDialogRef<DistritoDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.DistritoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}