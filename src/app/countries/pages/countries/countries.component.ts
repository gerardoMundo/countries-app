import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-countries',
  templateUrl: './countries.component.html',
  styles: [],
})
export class CountriesComponent {
  constructor(private countriesService: CountriesService) {}

  public _countries: Country[] = [];
  public isLoading = false;

  searchByCountry(term: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(countries => {
      this._countries = countries;
      this.isLoading = false;
    });
  }
}
