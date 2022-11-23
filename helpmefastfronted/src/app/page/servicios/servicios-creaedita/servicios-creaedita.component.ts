import { ComentariosService } from './../../../service/comentarios.service';
import { DistritoService } from 'src/app/service/distrito.service';
import { EnfermeroService } from './../../../service/enfermero.service';
import { ServiciosService } from './../../../service/servicios.service';
import { Servicios } from './../../../model/servicios';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Enfermero } from 'src/app/model/enfermero';
import { Distrito } from 'src/app/model/distrito';

@Component({
  selector: 'app-servicios-creaedita',
  templateUrl: './servicios-creaedita.component.html',
  styleUrls: ['./servicios-creaedita.component.css']
})

export class ServiciosCreaeditaComponent implements OnInit {
servicios:Servicios =new Servicios();
tituloPAGINA: string = "";
mensaje: String="";
id:number=0;
edicion: boolean = false;

listaEnfermero:Enfermero[]=[];
idEnfermeroSeleccionado:number=0;

listaDistrito:Distrito[]=[];
idDistritoSeleccionado:number=0;

  constructor(private serviciosService:ServiciosService,private router:Router, private route: ActivatedRoute, private enfermeroService:EnfermeroService, private distritoService:DistritoService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        if (this.edicion) {
          this.tituloPAGINA = "Editar Servicios";
        } else {
          this.tituloPAGINA = "Insertar Servicios";
        }
        this.init();
      });
      this.enfermeroService.listar().subscribe(data=>{this.listaEnfermero = data});
      this.distritoService.listar().subscribe(data => { this.listaDistrito = data });
    }
    aceptar(): void{
      if(this.servicios.nameServicios.length>0 && this.servicios.descServicios.length>0 && this.idDistritoSeleccionado>0){
        let e = new Enfermero();
        let d = new Distrito();
        e.idEnfermero=this.idEnfermeroSeleccionado;
        d.idDistrito=this.idDistritoSeleccionado;
        this.servicios.enfermero = e;
        this.servicios.distrito = d;

        if (this.edicion) {
        this.serviciosService.modificar(this.servicios).subscribe(data=>{
          this.serviciosService.listar().subscribe(data=>{
            this.serviciosService.setlista(data);
          })
        })
      } else {
        this.serviciosService.insertar(this.servicios).subscribe(data => {
          this.serviciosService.listar().subscribe(data => {
            this.serviciosService.setlista(data);
          })
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['servicios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
    }

    init() {
      if (this.edicion) {
        this.serviciosService.listarId(this.id).subscribe(data => {
          this.servicios = data;
          console.log(data);
          this.idEnfermeroSeleccionado=data.enfermero.idEnfermero;
          this.idDistritoSeleccionado=data.distrito.idDistrito;
        })
      }

    }
  }

