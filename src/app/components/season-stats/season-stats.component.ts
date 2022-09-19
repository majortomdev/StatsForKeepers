import { Component, OnInit } from '@angular/core';
import { SeasonStats } from '../../model/season-stats';
import { SeasonStatsService } from '../../service/season-stats.service';

@Component({
  selector: 'app-season-stats',
  templateUrl: './season-stats.component.html',
  styleUrls: ['./season-stats.component.css']
})
export class SeasonStatsComponent implements OnInit {

  seasonStats: SeasonStats[];

  constructor(private statsService: SeasonStatsService) { }

  ngOnInit() {
    this.statsService.findAll().subscribe(data => {
      this.seasonStats = data;
    })
  }

}

