import { Component, OnInit } from '@angular/core';
import { EnfermeroService } from 'src/app/service/enfermero.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enfermero-dialogo',
  templateUrl: './enfermero-dialogo.component.html',
  styleUrls: ['./enfermero-dialogo.component.css']
})
export class EnfermeroDialogoComponent implements OnInit {

  constructor(private enfermeroService: EnfermeroService,
    private dialogRef: MatDialogRef<EnfermeroDialogoComponent>
  ) { }
  ngOnInit(): void {  }
  confirmar(estado: boolean) {
    this.enfermeroService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}

