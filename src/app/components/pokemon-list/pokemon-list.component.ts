import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons : string[] = [];
  constructor(private _pokeApi : PokeApiService) { }

  ngOnInit(): void {
    this._pokeApi.getList().subscribe(
      {
        next:(datas)=> this.pokemons=datas,
        error : console.error,
        complete : ()=> console.log('fini')
      }
    );
  }

}
