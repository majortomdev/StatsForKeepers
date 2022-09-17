import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list/country-list.component';
import { ELeaguesComponent } from './e-leagues/e-leagues/e-leagues.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'engLeagues' , component: ELeaguesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }