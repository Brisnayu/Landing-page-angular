import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { PlayerModel } from '../../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private httpClient = inject(HttpClient);

  getFile() {
    const players: PlayerModel[] = [];
    const path = '../../utils/infoPlayers/goalkeepers.ts';

    try {
      this.httpClient
        .get<PlayerModel[]>(path)
        .pipe(
          catchError(error => {
            console.error('Error fetching players data', error);
            return throwError(() => new Error('Error fetching players data'));
          }),
        )
        .subscribe((response: PlayerModel[]) => {
          response.forEach((player: PlayerModel) => players.push(player));
        });
    } catch (err) {
      console.error('Error fetching players data', err);
      return throwError(() => new Error('Error fetching players data'));
    }
    return players;
  }
}
