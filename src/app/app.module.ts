import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaleIconComponent } from './components/icons/male-icon/male-icon.component';
import { FemaleIconComponent } from './components/icons/female-icon/female-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    LoadingComponent,
    MaleIconComponent,
    FemaleIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
