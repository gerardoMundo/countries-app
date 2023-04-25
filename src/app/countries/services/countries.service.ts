import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private httpRequest(endpoint: string, query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`https://restcountries.com/v3.1/${endpoint}/${query}`)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]); /* Retorna un nuevo observable [] */
        }),
        delay(2000)
      );
  }

  searchCapital(query: string): Observable<Country[]> {
    return this.httpRequest('capital', query);
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
