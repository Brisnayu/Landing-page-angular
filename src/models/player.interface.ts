import { PlayerStatistics } from './playerStatistics.interface';

export interface Player {
  image: string;
  number: number;
  name: string;
  lastName: string;
  position: string;
  statistics: PlayerStatistics[];
}
