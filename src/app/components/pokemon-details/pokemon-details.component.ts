import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPokemon } from 'src/app/models/ipokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  public pokemon! : IPokemon;
  private _subParams! : Subscription;

  constructor(private _pokeApi : PokeApiService, private _activatedRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    this._subParams.unsubscribe();
  }

  ngOnInit(): void {
    this._subParams = this._activatedRoute.params.subscribe(
      params =>{
        this._pokeApi.getDetails(params['name']).subscribe(
          {
            next:(datas)=> this.pokemon = datas,
            error:console.error,
            complete:()=>console.log('fini')
          });
        });
  }
}
