import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  removeButtonDisabled = false;
  addButtonClicked = false;
  removeButtonClicked = false;
  pokemonName = "";
  currentAddTimeout: any;
  currentRemoveTimeout: any;
  inputValue = "";
  pokemons: string[] = [];
  isOverTarget = this.pokemons.length > 1;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

  }

  // toggleButton($event: Event) {
  //   console.log($event);
  //   this.buttonDisabled = !this.buttonDisabled;
  // }

  // generateBackgroundColor() {
  //   return this.isOverTarget ? "#00B020" : "#B00020";
  // }

  addPokemon() {
    if ("" !== this.pokemonName) {
      this.removeButtonClicked = false;
      if (this.currentAddTimeout) return;
      this.addButtonClicked = true;
      this.pokemonService.addPokemon(this.pokemonName);
      this.pokemonName = "";
      const currentAddTimeout = setTimeout(() => {
        this.addButtonClicked = false;
      }, 2000);
      // console.log(this.pokemons);
    };
  }

  removePokemon(index: number) {
    this.addButtonClicked = false;
    if (this.currentAddTimeout) return;

    if (0 !== this.pokemons.length) {
    }
    this.removeButtonClicked = true;
    const currentRemoveTimeout = setTimeout(() => {
      this.removeButtonClicked = false;
    }, 2000);
    // console.log('remove list' + index);
    this.pokemonService.removePokemon(index)
  }

  pokemonNameChanged($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    this.pokemonName = inputElement.value;
  }


}
