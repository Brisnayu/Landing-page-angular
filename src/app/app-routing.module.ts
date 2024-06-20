import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './main/players/players.component';
import { PlayerComponent } from './main/player/player.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
};

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
