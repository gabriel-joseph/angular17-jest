import { TestBed } from '@angular/core/testing';

import { MusicLibService } from './music-lib.service';

describe('MusicLibService', () => {
  let service: MusicLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
