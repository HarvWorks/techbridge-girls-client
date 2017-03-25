import { TestBed, inject } from '@angular/core/testing';

import { MakersService } from './makers.service';

describe('MakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakersService]
    });
  });

  it('should ...', inject([MakersService], (service: MakersService) => {
    expect(service).toBeTruthy();
  }));
});
