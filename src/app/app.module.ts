import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list/country-list.component';
import { CountryService } from './service/country.service';
import { ELeaguesComponent } from './e-leagues/e-leagues/e-leagues.component';
import { EleaguesService } from './service/eleagues.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ELeaguesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountryService, EleaguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }