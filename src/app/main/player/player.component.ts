import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { PlayerModel } from '../../../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements OnInit {
  infoPlayer: PlayerModel | null = null;
  personalInfoArray: { key: string; value: number | string }[] = [];

  titleBiography: string = '';
  contentBiography: string = '';

  constructor(
    private playersService: PlayersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));

    this.playersService.getFilePlayers().subscribe(
      data => {
        this.infoPlayer = data.find(player => player.id === playerId) ?? null;
        this.titleBiography = `infoPlayer.biography.${playerId}.title`;
        this.contentBiography = `infoPlayer.biography.${playerId}.content`;
      },
      error => {
        console.log('Error', error);
      },
    );
  }

  goBack() {
    this.router.navigate(['/players']);
  }
}
