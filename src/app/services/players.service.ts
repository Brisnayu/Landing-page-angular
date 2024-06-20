import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { PlayerModel } from '../../models/player.model';
import { Player } from '../../models/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private httpClient = inject(HttpClient);

  getFilePlayers() {
    const path = '../../assets/infoPlayers/dataPlayers.json';
    console.log('🟥');
    return this.httpClient.get<Player[]>(path).pipe(
      map((response: Player[]) => {
        return response.map(player => new PlayerModel(player));
      }),
      catchError(error => {
        console.error('Error fetching players data', error);
        return throwError(() => new Error('Error fetching players data'));
      }),
    );
  }
}
