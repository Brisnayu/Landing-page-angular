import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PlayerModel } from '../../models/player.model';
import { Player } from '../../models/player.interface';
import { IPlayerService } from '../../contracts/IPlayerService';

export class PlayersService implements IPlayerService {
  private httpClient = inject(HttpClient);

  getFilePlayers(): Observable<PlayerModel[]> {
    const path = '../../assets/infoPlayers/dataPlayers.json';
    console.log('🟥');
    return this.httpClient.get<Player[]>(path).pipe(
      map((response: Player[]) => {
        console.log('found');
        return response.map(player => new PlayerModel(player));
      }),
      catchError(error => {
        console.error('Error fetching players data', error);
        return throwError(() => new Error('Error fetching players data'));
      }),
    );
  }
}
