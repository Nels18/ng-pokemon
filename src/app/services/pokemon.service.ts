import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: string[] = [];
  name!: string;

  addPokemon(name: string) {
    this.pokemons?.push(name);
    console.log(this.pokemons);
  }

  removePokemon(index: number) {
    console.log('remove list ' + index);
    this.pokemons.splice(index, 1);
  }

  removePokemonByName(name: string | undefined) {
    if (!name) {
      throw new Error('Pokemon Name should be set');
    }
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }

  constructor() {}
}
