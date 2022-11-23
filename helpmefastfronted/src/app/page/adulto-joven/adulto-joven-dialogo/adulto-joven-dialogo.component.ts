import { MatDialogRef } from '@angular/material/dialog';
import { AdultoJovenService } from './../../../service/adulto-joven.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulto-joven-dialogo',
  templateUrl: './adulto-joven-dialogo.component.html',
  styleUrls: ['./adulto-joven-dialogo.component.css']
})
export class AdultoJovenDialogoComponent implements OnInit {

  constructor(private AdultoJovenService: AdultoJovenService, private dialogRef: MatDialogRef<AdultoJovenDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.AdultoJovenService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}