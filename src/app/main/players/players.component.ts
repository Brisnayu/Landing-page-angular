import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { PlayerModel } from '../../../models/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  infoGoalkeepers: PlayerModel[] = [];
  infoDefenders: PlayerModel[] = [];
  infoMidfielders: PlayerModel[] = [];
  infoForwards: PlayerModel[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getFilePlayers().subscribe(
      data => {
        this.infoGoalkeepers = data.filter(
          player => player.position === 'Goalkeeper',
        );
        this.infoDefenders = data.filter(
          player => player.position === 'Defender',
        );
        this.infoMidfielders = data.filter(
          player => player.position === 'Midfielders',
        );
        this.infoForwards = data.filter(
          player => player.position === 'Forward',
        );
      },
      error => {
        console.error('Error:', error);
      },
    );
  }

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
