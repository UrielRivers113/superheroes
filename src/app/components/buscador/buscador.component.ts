import { Component, OnInit } from '@angular/core';
//AQUI SE AGARRA EL PARAMETRO QUE SE ENVIE
import { ActivatedRoute } from '@angular/router';
//AHORA VAMOS A IMPORTAR SERVICIOS
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
  
})
export class BuscadorComponent implements OnInit {

    heroes:any[] = []
  //ESTA VARIABLE ES LA QUE SE PONDRÁ EN EL buscador.component.html
    termino: string; 

  constructor(private  activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { 
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      //AQUI SE PONE "termino" porque así se llamó en app.routes.ts
      //console.log(params['termino']);
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
