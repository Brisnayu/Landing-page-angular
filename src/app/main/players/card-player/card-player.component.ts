import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player.interface';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {
  @Input() players: Player[] = [];
}
