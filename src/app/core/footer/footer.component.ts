import { Component } from '@angular/core';
import { Links } from '../../../models/links.interface';
import { menuFooter } from '../../../utils/menuFooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menuFooter: Links[] = menuFooter;
}
