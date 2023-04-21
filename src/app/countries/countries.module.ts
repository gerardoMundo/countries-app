import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountriesRoutingModule } from './countries.routing.module';
import { RegionComponent } from './pages/region/region.component';
import { SharedModule } from '../shared/shared.module';
import { WatchCountriesComponent } from './pages/watch-countries/watch-countries.component';

@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    CountriesComponent,
    WatchCountriesComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
