import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { CacheStore, Country, Region } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private httpRequest(endpoint: string, query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`https://restcountries.com/v3.1/${endpoint}/${query}`)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]); /* Retorna un nuevo observable de type[] */
        })
      );
  }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: {
      region: 'Americas' || 'Africa' || 'Oceania' || 'Europe' || 'Asia',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  loadFromLocalStorage() {
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore') || '{}');
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.httpRequest('capital', term).pipe(
      tap(countries => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveInLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.httpRequest('name', term).pipe(
      tap(countries => (this.cacheStore.byCountry = { term, countries })),
      tap(() => this.saveInLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.httpRequest('region', region).pipe(
      tap(countries => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveInLocalStorage())
    );
  }

  searchCountryByID(id: string): Observable<Country | null> {
    const url = `https://restcountries.com/v3.1//alpha/${id}`;

    return this.http.get<Country[]>(url).pipe(
      map(country => (country.length > 0 ? country[0] : null)),
      catchError(() => of(null))
    );
  }
}
