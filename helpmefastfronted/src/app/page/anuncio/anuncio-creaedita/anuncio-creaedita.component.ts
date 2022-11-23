import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnuncioService } from './../../../service/anuncio.service';
import { Anuncio } from './../../../model/anuncio';
import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/model/servicios';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-anuncio-creaedita',
  templateUrl: './anuncio-creaedita.component.html',
  styleUrls: ['./anuncio-creaedita.component.css']
})
export class AnuncioCreaeditaComponent implements OnInit {
 anuncio:Anuncio= new Anuncio();
 mensaje:string="";
 edicion: boolean= false;
 id: number=0;
 listaServicios: Servicios[] = [];
 idServicioSeleccionado: number = 0;

  constructor(private anuncioService: AnuncioService, private router:Router, private route:ActivatedRoute, private servicioService:ServiciosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=  null;
      this.init();
    })
    this.servicioService.listar().subscribe(data => { this.listaServicios = data });
  }
  aceptar(): void {
    if (this.anuncio.precioServicio> 0 && this.idServicioSeleccionado>0) {
      let s = new Servicios();
      s.idServicios = this.idServicioSeleccionado;
      this.anuncio.servicio = s;
      
      if(this.edicion){
        this.anuncioService.modificar(this.anuncio).subscribe(data =>{
          this.anuncioService.listar().subscribe(data=>{
            this.anuncioService.setLista(data);
          })
        })
      } else{
        this.anuncioService.insertar(this.anuncio).subscribe(data=>{
          this.anuncioService.listar().subscribe(data=>{
            this.anuncioService.setLista(data);
          });
        }, err=> {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['anuncios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.anuncioService.listarId(this.id).subscribe(data=>{
        this.anuncio=data;
        console.log(data);
        this.idServicioSeleccionado = data.servicio.idServicios;
      })
    }
  }

}


