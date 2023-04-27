import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-countries',
  templateUrl: './countries.component.html',
  styles: [],
})
export class CountriesComponent implements OnInit {
  public _countries: Country[] = [];
  public isLoading = false;
  public initialValue = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(countries => {
      this._countries = countries;
      this.isLoading = false;
    });
  }
}
