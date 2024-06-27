import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerModel } from '../../../models/player.model';
import { IPlayerService } from '../../../contracts/IPlayerService';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  providers: [{ provide: IPlayerService, useClass: PlayersService }],
})
export class PlayerComponent implements OnInit {
  infoPlayer: PlayerModel | null = null;
  personalInfoArray: { key: string; value: number | string }[] = [];
  loading = true;

  titleBiography: string = '';
  contentBiography: string = '';

  constructor(
    private playersService: IPlayerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  simulateLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit() {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));

    this.simulateLoading();

    this.playersService.getFilePlayers().subscribe(
      data => {
        this.infoPlayer = data.find(player => player.id === playerId) ?? null;
        this.titleBiography = `infoPlayer.biography.${playerId}.title`;
        this.contentBiography = `infoPlayer.biography.${playerId}.content`;
      },
      error => {
        console.log('Error', error);
        this.loading = false;
      },
    );
  }

  goBack() {
    this.router.navigate(['/players']);
  }
}
