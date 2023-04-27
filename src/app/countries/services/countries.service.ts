import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces';

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

  constructor(private http: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    return this.httpRequest('capital', query).pipe(
      tap(countries => (this.cacheStore.byCapital.countries = countries)),
      tap(() => (this.cacheStore.byCapital.term = query))
    );
  }

  searchCountry(query: string): Observable<Country[]> {
    return this.httpRequest('name', query);
  }

  searchRegion(query: string): Observable<Country[]> {
    return this.httpRequest('region', query);
  }

  searchCountryByID(id: string): Observable<Country | null> {
    const url = `https://restcountries.com/v3.1//alpha/${id}`;

    return this.http.get<Country[]>(url).pipe(
      map(country => (country.length > 0 ? country[0] : null)),
      catchError(() => of(null))
    );
  }
}
