import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  constructor(private countriesService: CountriesService) {}

  public _countries: Country[] = [];

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term).subscribe(countries => {
      this._countries = countries;
    });
  }
}
