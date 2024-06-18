import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './config/translate-loader.config';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [AppComponent, PruebaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(provideTranslation()),
    CoreModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
