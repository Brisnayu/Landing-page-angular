import { Player } from './player.interface';
import { PlayerStatistics } from './playerStatistics.interface';

export class PlayerModel implements Player {
  image: string;
  number: number;
  name: string;
  lastName?: string;
  position: string;
  statistics: PlayerStatistics[];

  constructor(player: Player) {
    this.image = player.image;
    this.number = player.number;
    this.name = player.name;
    this.lastName = player.lastName;
    this.position = player.position;
    this.statistics = player.statistics;
  }
}
