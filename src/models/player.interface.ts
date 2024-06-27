import { PlayerPersonalInformation } from './playerPersonalInformation.interface';
import { PlayerStatistics } from './playerStatistics.interface';

export interface Player {
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
}
