import { Component } from '@angular/core';
import { Links } from '../../../models/links.interface';
import { menuHeader } from '../../../utils/menuHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuHeader: Links[] = menuHeader;
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
