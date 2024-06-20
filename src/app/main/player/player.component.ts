import { Component, OnInit, inject } from '@angular/core';
import { Player } from '../../../models/player.interface';
import { defenders } from '../../../utils/infoPlayers/defenders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements OnInit {
  private router = inject(Router);

  infoGoalkeepers: Player = defenders[0];
  personalInfoArray: { key: string; value: number | string }[] = [];

  constructor() {
    console.log(this.infoGoalkeepers);
  }

  ngOnInit() {
    if (this.infoGoalkeepers.personalInformation) {
      this.personalInfoArray = Object.entries(
        this.infoGoalkeepers.personalInformation,
      ).map(([key, value]) => ({ key, value }));
    }
  }

  goBack() {
    this.router.navigate(['/players']);
  }
}
