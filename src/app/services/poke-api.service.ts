import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IPokemon } from '../models/ipokemon';
import { environment } from 'src/environments/environment';
import { IPokemonList } from '../models/ipokemon-list';
import { IPokemonDetailsAPI } from '../models/ipokemon-details-api';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private _http : HttpClient) { }

  public getList():Observable<string[]>{
    return this._http.get<IPokemonList>(environment.pokeApi_url)
      .pipe(
        map(result => result.results.map(list_item => list_item.name))
      );
  }

  public getDetails(name:string): Observable<IPokemon>{
    return this._http.get<IPokemonDetailsAPI>(environment.pokeApi_url+name)
      .pipe(
        map(result => {
          return {
            name : result.name,
            sprite_url : result.sprites.front_default,
            types : result.types.map(type => type.type.name)
          };
        })
      );
  }
}
