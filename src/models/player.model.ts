import { Player } from './player.interface';
import { PlayerPersonalInformation } from './playerPersonalInformation.interface';
import { PlayerStatistics } from './playerStatistics.interface';

export class PlayerModel implements Player {
  id: number;
  image: string;
  number: number;
  name: string;
  lastName?: string;
  position: string;
  statistics: PlayerStatistics[];
  imagePrincipalDetail: string;
  imageBiography: string;
  titleBiography: string;
  biography: string;
  personalInformation?: PlayerPersonalInformation;

  constructor(player: Player) {
    this.id = player.id;
    this.image = player.image;
    this.number = player.number;
    this.name = player.name;
    this.lastName = player.lastName;
    this.position = player.position;
    this.statistics = player.statistics;
    this.imagePrincipalDetail = player.imagePrincipalDetail;
    this.imageBiography = player.imageBiography;
    this.titleBiography = player.titleBiography;
    this.biography = player.biography;
    this.personalInformation = player.personalInformation;
  }
}
