import { Player } from '../../models/player.interface';

export const goalkeepers: Player[] = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dx8j6h1rb/image/upload/v1718709578/Landing-BFC/01-MARC-ANDRE_TER_STEGEN_jfljtn.webp',
    number: 1,
    name: 'Marc-André',
    lastName: 'ter Stegen',
    position: 'Goalkeeper',
    statistics: [
      {
        title: 'Barça Appearances',
        total: 413,
        season: '2023/2024 Season',
        number: 36,
      },
      {
        title: 'Barça Clean Sheets',
        total: 173,
        season: '2023/2024 Season',
        number: 17,
      },
      {
        title: 'Barça Saves',
        total: 962,
        season: '2023/2024 Season',
        number: 96,
      },
    ],
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dx8j6h1rb/image/upload/v1718709578/Landing-BFC/26-INAKI_PENA_l0s0me.webp',
    number: 13,
    name: 'Iñaki',
    lastName: 'Peña',
    position: 'Goalkeeper',
    statistics: [
      {
        title: 'Barça Appearances',
        total: 22,
        season: '2023/2024 Season',
        number: 17,
      },
      {
        title: 'Barça Clean Sheets',
        total: 4,
        season: '2023/2024 Season',
        number: 3,
      },
      {
        title: 'Barça Saves',
        total: 46,
        season: '2023/2024 Season',
        number: 42,
      },
    ],
  },
];
