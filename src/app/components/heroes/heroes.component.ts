import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

//ESTO QUE SIGUE ES PARA CUANDO SE CREA UNA FUNCION PARA DIRECCIONAR CON UN BOTÓN 
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  // Private router se pone solo cuando se utiliza una función para direccionar con botón 
  constructor( private _heroesService: HeroesService,
               private router:Router ) { }

  ngOnInit() {
  this.heroes = this._heroesService.getHeroes();
  //console.log(this.heroes);
  }
  

}
