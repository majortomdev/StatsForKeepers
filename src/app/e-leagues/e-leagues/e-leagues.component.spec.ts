import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELeaguesComponent } from './e-leagues.component';

describe('ELeaguesComponent', () => {
  let component: ELeaguesComponent;
  let fixture: ComponentFixture<ELeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
