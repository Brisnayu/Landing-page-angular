import { Component } from '@angular/core';
import { Player } from '../../../models/player.interface';
import { goalkeepers } from '../../../utils/infoPlayers/goalkeepers';
import { defenders } from '../../../utils/infoPlayers/defenders';
import { midfielders } from '../../../utils/infoPlayers/midfielders';
import { forwards } from '../../../utils/infoPlayers/forwards';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
  infoGoalkeepers: Player[] = goalkeepers;
  infoDefenders: Player[] = defenders;
  infoMidfielders: Player[] = midfielders;
  infoForwards: Player[] = forwards;

  public scrollToSelection(section: string) {
    const item = document.getElementById(section);
    if (item) {
      const redirec = item.getBoundingClientRect().top - 100;
      window.scroll({
        top: redirec,
        behavior: 'smooth',
      });
    }
  }
}
