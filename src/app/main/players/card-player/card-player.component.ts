import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Player } from '../../../../models/player.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {
  @Input() players: Player[] = [];
  @Output() playerSelected = new EventEmitter<Player>();
  private router = inject(Router);

  navigateToDetails(id: number, item: Player): void {
    this.playerSelected.emit(item);
    this.router.navigate([`/player/${id}`]);
  }
}
