import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private http: HttpClient) {}

  private baseURL = 'https://restcountries.com/v3.1';

  searchCapital(query: string): Observable<Country[]> {
    const endpoint = `/capital/${query}`;

    return this.http.get<Country[]>(this.baseURL + endpoint);
  }
}
