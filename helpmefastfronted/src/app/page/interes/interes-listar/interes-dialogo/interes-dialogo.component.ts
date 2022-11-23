import { MatDialogRef } from '@angular/material/dialog';
import { InteresService } from './../../../../service/interes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interes-dialogo',
  templateUrl: './interes-dialogo.component.html',
  styleUrls: ['./interes-dialogo.component.css']
})
export class InteresDialogoComponent implements OnInit {

  constructor(private interesService: InteresService,
    private dialogRef: MatDialogRef<InteresDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.interesService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
