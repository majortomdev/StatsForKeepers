import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list/country-list.component';
import { ELeaguesComponent } from './components/e-leagues/e-leagues/e-leagues.component';
import { SeasonStatsComponent } from './components/season-stats/season-stats.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'engLeagues' , component: ELeaguesComponent },
  { path: 'seasonStats' , component: SeasonStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }