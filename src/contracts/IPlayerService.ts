import { Observable } from 'rxjs';
import { PlayerModel } from '../models/player.model';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class IPlayerService {
  public abstract getFilePlayers(): Observable<PlayerModel[]>;
}
