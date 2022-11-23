import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdultoJovenService } from './../../../service/adulto-joven.service';
import { AdultoJoven } from './../../../model/adultoJoven';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulto-joven-insertar',
  templateUrl: './adulto-joven-insertar.component.html',
  styleUrls: ['./adulto-joven-insertar.component.css']
})
export class AdultoJovenInsertarComponent implements OnInit {

  AdultoJoven: AdultoJoven = new AdultoJoven();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private AdultoJovenService: AdultoJovenService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.AdultoJoven.idAdultoJoven > 0 && this.AdultoJoven.nombre.length > 0 && this.AdultoJoven.apellido.length > 0 && this.AdultoJoven.edad > 0 && this.AdultoJoven.dni > 0
        && this.AdultoJoven.email.length > 0 && this.AdultoJoven.celular > 0 && this.AdultoJoven.direccion.length > 0) {
          if(this.edicion){
            this.AdultoJovenService.modificar(this.AdultoJoven).subscribe(data => {
              this.AdultoJovenService.listar().subscribe(data => {
                this.AdultoJovenService.setLista(data);
          })
        })

      }else{
      this.AdultoJovenService.insertar(this.AdultoJoven).subscribe(data => {
        this.AdultoJovenService.listar().subscribe(data => {
          this.AdultoJovenService.setLista(data);
        })
      })
    }
      this.router.navigate(['adultoJoven']);
    } else {
      this.mensaje = "Complete todos los espacios requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.AdultoJovenService.listarId(this.id).subscribe(data => {
        this.AdultoJoven = data;
      })
    }

  }

}


