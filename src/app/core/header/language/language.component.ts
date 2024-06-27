import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  selectedLanguage: string = 'es';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  public changeLanguage(value: string) {
    this.selectedLanguage = value;
    this.translateService.use(this.selectedLanguage);
  }
}
