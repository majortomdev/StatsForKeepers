import { TestBed, inject } from '@angular/core/testing';

import { SeasonStatsService } from './season-stats.service';

describe('SeasonStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonStatsService]
    });
  });

  it('should be created', inject([SeasonStatsService], (service: SeasonStatsService) => {
    expect(service).toBeTruthy();
  }));
});
