import { TestBed, inject } from '@angular/core/testing';

import { EleaguesService } from './eleagues.service';

describe('EleaguesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EleaguesService]
    });
  });

  it('should be created', inject([EleaguesService], (service: EleaguesService) => {
    expect(service).toBeTruthy();
  }));
});
