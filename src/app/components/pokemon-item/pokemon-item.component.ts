import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name: string | undefined;
  // @Output() removeClick = new EventEmitter();

  constructor(private pokemonService: PokemonService) {}

  remove($event: MouseEvent) {
    $event.stopPropagation();
    console.log('remove item');
    // this.removeClick.emit()
    this.pokemonService.removePokemonByName(this.name)
  }
}
