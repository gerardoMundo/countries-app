import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { RegionComponent } from './pages/region/region.component';
import { WatchCountriesComponent } from './pages/watch-countries/watch-countries.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: CapitalComponent,
  },
  {
    path: 'by-countries',
    component: CountriesComponent,
  },
  {
    path: 'by-region',
    component: RegionComponent,
  },
  {
    path: 'country/:id',
    component: WatchCountriesComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
