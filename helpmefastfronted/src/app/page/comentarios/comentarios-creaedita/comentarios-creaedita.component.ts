import { ComentariosService } from 'src/app/service/comentarios.service';
import { Comentarios } from './../../../model/comentarios';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { Servicios } from 'src/app/model/servicios';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-comentarios-creaedita',
  templateUrl: './comentarios-creaedita.component.html',
  styleUrls: ['./comentarios-creaedita.component.css']
})
export class ComentariosCreaeditaComponent implements OnInit {
  comentario: Comentarios = new Comentarios();
  tituloPAGINA: string ="";
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  listaServicios: Servicios[]=[];
  idServicioSeleccionado: number=0;

  constructor(private comentarioService: ComentariosService, private router: Router, private route: ActivatedRoute, private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      if(this.edicion){
        this.tituloPAGINA="Editar comentario";
      } else {
        this.tituloPAGINA="Insertar comentario";
      }
      this.init();
    });
    this.serviciosService.listar().subscribe(data => { this.listaServicios = data });
  }
  aceptar():void{
    if(this.comentario.opinion.length > 0 && this.comentario.numCalificacion.length> 0 && this.idServicioSeleccionado>0){
    let s = new Servicios();
    s.idServicios=this.idServicioSeleccionado;
    this.comentario.servicio=s;

    if(this.edicion)
    {
      this.comentarioService.modificar(this.comentario).subscribe(data => {
        this.comentarioService.listar().subscribe(data => {
          this.comentarioService.setLista(data);
        })
      })
    } else {
    this.comentarioService.insertar(this.comentario).subscribe(data => {
      this.comentarioService.listar().subscribe(data => {
        this.comentarioService.setLista(data);
      });
    }, err => {
      console.log(err);
    });
  }
    this.router.navigate(['comentarios']);
    } else {
    this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.comentarioService.listarId(this.id).subscribe(data => {
        this.comentario = data;
        console.log(data);
        this.idServicioSeleccionado=data.servicio.idServicios;
      });
    }
  }

}
