import { Component } from '@angular/core';
import { Player } from '../../../models/player.interface';
import { goalkeepers } from '../../../utils/infoGoalkeepers/goalkeepers';
import { defenders } from '../../../utils/infoGoalkeepers/defenders';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
  infoGoalkeepers: Player[] = goalkeepers;
  infoDefenders: Player[] = defenders;
}
