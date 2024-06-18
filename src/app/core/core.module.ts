import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageComponent } from './header/language/language.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LanguageComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
