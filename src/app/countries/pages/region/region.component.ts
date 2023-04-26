import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Region, Country } from '../../interfaces';

@Component({
  selector: 'countries-by-region',
  templateUrl: './region.component.html',
  styles: [],
})
export class RegionComponent {
  constructor(private countriesService: CountriesService) {}

  public regions?: Region[] = [
    'Americas',
    'Africa',
    'Oceania',
    'Europe',
    'Asia',
  ];
  public selectedRegion?: Region;
  public _countries: Country[] = [];
  public isLoading = false;

  searchByRegion(region: Region) {
    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe(region => {
      this._countries = region;
      this.isLoading = false;
    });
  }
}
