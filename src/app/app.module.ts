import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list/country-list.component';
import { CountryService } from './service/country.service';
import { ELeaguesComponent } from './components/e-leagues/e-leagues/e-leagues.component';
import { EleaguesService } from './service/eleagues.service';
import { SeasonStatsComponent } from './components/season-stats/season-stats.component';
import { SeasonStatsService } from './service/season-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ELeaguesComponent,
    SeasonStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountryService, EleaguesService,
  SeasonStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }