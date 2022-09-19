import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeasonStats } from '../model/season-stats'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeasonStatsService {

  private statsUrl: string;
  private seasonId: number;

  constructor(private http: HttpClient) {
    //this.statsUrl = 'http://localhost:8080/soccer/standings/'+this.seasonId;
    this.statsUrl = 'http://localhost:8080/soccer/standings/1980';
  }

  public findAll(): Observable<SeasonStats[]> {
    return this.http.get<SeasonStats[]>(this.statsUrl);
  }

}


