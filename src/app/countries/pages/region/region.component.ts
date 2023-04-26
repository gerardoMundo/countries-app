import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './region.component.html',
  styles: [],
})
export class RegionComponent {
  constructor(private countriesService: CountriesService) {}

  public _countries: Country[] = [];
  public isLoading = false;

  searchByRegion(term: string) {
    this.isLoading = true;
    this.countriesService.searchRegion(term).subscribe(countries => {
      this._countries = countries;
      this.isLoading = false;
    });
  }
}
