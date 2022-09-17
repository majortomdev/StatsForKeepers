import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  private countriesUrl: string;

  constructor(private http: HttpClient) {
    this.countriesUrl = 'http://localhost:8080/soccer/countries?continent=Europe';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }

}
