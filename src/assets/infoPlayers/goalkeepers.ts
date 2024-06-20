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
    imagePrincipalDetail:
      'https://www.fcbarcelona.com/photo-resources/2023/10/04/d780158f-0256-43ab-b2c7-b8445feccd69/mini_01-MARC-ANDRE_TER_STEGEN.png?width=670&height=790',
    imageBiography:
      'https://www.fcbarcelona.com/photo-resources/2023/10/03/7d67f42b-2a8d-4e51-8d41-8aa3542482e4/01-MARC-ANDRE_TER_STEGEN.jpg?width=640&height=400',
    titleBiography:
      'Portero sobrio y con grandes reflejos, destaca por el control aéreo y el dominio del juego de pies',
    biography:
      'Marc-André ter Stegen firma como portero del FC Barcelona en verano de 2014 procedente del Borussia Mönchengladbach. Nacido el día 30 de abril de 1992 en la localidad de Mönchengladbach, el alemán despuntaba desde muy joven como uno de los porteros más prometedores del continente europeo.',
    personalInformation: {
      placeOfBirth: 'Mönchengladbach, Germany',
      dateOfBirth: '30/04/1992',
      weight: 85,
      height: 187,
      clubDebut: '17/09/2014',
    },
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
    imagePrincipalDetail:
      'https://www.fcbarcelona.com/photo-resources/2023/09/29/329da5c8-7969-46c7-b9ad-ef64d6e49072/mini_26-INAKI_PENA.png?width=670&height=790',
    imageBiography:
      'https://www.fcbarcelona.com/photo-resources/2023/10/03/65ae7c6c-8b9a-4d94-94b3-273c30c596a5/26-INAKI_PENA.jpg?width=640&height=400',
    titleBiography:
      'Portero formado en la Masía que destaca por su seguridad, liderazgo y valentía bajo palos y su buen dominio con la pelota',
    biography:
      'Nacido en Alicante en 1999, Iñaki Peña llegó al Barça procedente del Villarreal en la categoría de Infantil en 2012. Durante su primera temporada ya ganó la Liga con el equipo azulgrana y lo repitió durante sus ascensos de categorías, destacando la Youth League de la temporada 2017/18.',
    personalInformation: {
      placeOfBirth: 'Alicante, Spain',
      dateOfBirth: '02/03/1999',
      weight: 78,
      height: 184,
    },
  },
];
