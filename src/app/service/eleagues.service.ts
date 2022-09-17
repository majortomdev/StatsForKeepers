import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { League } from '../model/league'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EleaguesService {

  private eLeaguesUrl: string;

  constructor(private http: HttpClient) {
    this.eLeaguesUrl = 'http://localhost:8080/soccer/leagues?countryId=113';
  }

  public findAll(): Observable<League[]> {
    return this.http.get<League[]>(this.eLeaguesUrl);
  }

}
