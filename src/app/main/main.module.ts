import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardPlayerComponent } from './players/card-player/card-player.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
    NotFoundComponent,
    CardPlayerComponent,
  ],
  imports: [CommonModule, TranslateModule],
})
export class MainModule {}
