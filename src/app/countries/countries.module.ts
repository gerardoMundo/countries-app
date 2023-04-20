import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { WatchCountriesComponent } from './pages/watch-countries/watch-countries.component';
import { CountriesRoutingModule } from './countries.routing.module';

@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    CountriesComponent,
    WatchCountriesComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
  exports: [
    CapitalComponent,
    RegionComponent,
    CountriesComponent,
    WatchCountriesComponent,
  ],
})
export class CountriesModule {}
