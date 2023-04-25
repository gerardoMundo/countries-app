import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-watch-countries',
  templateUrl: './watch-countries.component.html',
  styles: [],
})
export class WatchCountriesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  public country?: Country;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.countriesService.searchCountryByID(id);
        })
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('/');
        return (this.country = country);
      });
  }
}
