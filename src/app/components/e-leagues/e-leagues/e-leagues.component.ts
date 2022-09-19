import { Component, OnInit } from '@angular/core';
import { League } from '../../../model/league';
import { EleaguesService } from '../../../service/eleagues.service'; 

@Component({
  selector: 'app-e-leagues',
  templateUrl: './e-leagues.component.html',
  styleUrls: ['./e-leagues.component.css']
})
export class ELeaguesComponent implements OnInit {

  leagues: League[];

  constructor(private eleagueService: EleaguesService) {
  }

  ngOnInit() {
    this.eleagueService.findAll().subscribe(data => {
      console.log(data);
      this.leagues = data;
    });
  }

}
