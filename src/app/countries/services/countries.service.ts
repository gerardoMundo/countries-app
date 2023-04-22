import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private baseURL = 'https://restcountries.com/v3.1';

  searchCapital(query: string): Observable<Country[]> {
    const endpoint = `/capital/${query}`;

    return this.http.get<Country[]>(this.baseURL + endpoint).pipe(
      catchError(error => {
        console.log(error);
        return of([]); /* Retorna un nuevo observable [] */
      })
    );
  }
}
