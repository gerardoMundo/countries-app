import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent implements OnInit {
  public initialValue = '';
  public _countries: Country[] = [];
  public isLoading = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string) {
    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe(countries => {
      this._countries = countries; //this.countriesService.cacheStore.byCapital.countries;

      this.isLoading = false;
    });
  }
}
