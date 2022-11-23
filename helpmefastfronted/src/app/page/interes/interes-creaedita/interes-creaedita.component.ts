import { Router, ActivatedRoute, Params } from '@angular/router';
import { InteresService } from './../../../service/interes.service';
import { Interes } from './../../../model/interes';
import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/model/anuncio';
import { AdultoJoven } from 'src/app/model/adultoJoven';
import { AdultoJovenService } from 'src/app/service/adulto-joven.service';
import { AnuncioService } from 'src/app/service/anuncio.service';

@Component({
  selector: 'app-interes-creaedita',
  templateUrl: './interes-creaedita.component.html',
  styleUrls: ['./interes-creaedita.component.css']
})
export class InteresCreaeditaComponent implements OnInit {
  interes: Interes = new Interes();
  tituloPAGINA: string = "";
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  listaAnuncios: Anuncio[] = [];
  listaAdultoJovenes: AdultoJoven[] = [];

  idAnuncioSeleccionado: number = 0;
  idAdultoJovenSeleccionado: number = 0;

  constructor(private interesService: InteresService, private router: Router, private route: ActivatedRoute, private anuncioService: AnuncioService, private adultoJovenService: AdultoJovenService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      if (this.edicion) {
        this.tituloPAGINA = "Editar Interes";
      } else {
        this.tituloPAGINA = "Insertar Interes";
      }
      this.init();
    });
    this.adultoJovenService.listar().subscribe(data => { this.listaAdultoJovenes = data });
    this.anuncioService.listar().subscribe(data => { this.listaAnuncios = data });
  }

  aceptar(): void {
    if (this.interes.levelInteres.length > 0 && this.idAdultoJovenSeleccionado>0 && this.idAnuncioSeleccionado>0) {
      let an = new Anuncio();
      let aj = new AdultoJoven();
      an.idAnuncio=this.idAnuncioSeleccionado;
      aj.idAdultoJoven=this.idAdultoJovenSeleccionado;
      this.interes.anuncio=an;
      this.interes.adultoJoven=aj;

      if (this.edicion){
        this.interesService.modificar(this.interes).subscribe(data => {
          this.interesService.listar().subscribe(data => {
            this.interesService.setLista(data);
          })
        })
      } else{
        this.interesService.insertar(this.interes).subscribe(data => {
          this.interesService.listar().subscribe(data => {
            this.interesService.setLista(data);
          });
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['intereses']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.interesService.listarId(this.id).subscribe(data => {
        this.interes = data
        console.log(data);
        this.idAdultoJovenSeleccionado=data.adultoJoven.idAdultoJoven;
        this.idAnuncioSeleccionado=data.anuncio.idAnuncio;
      });
    }
  }
}

