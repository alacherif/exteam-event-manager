import { TestBed, inject } from '@angular/core/testing';
import { EventService } from './event.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('Event Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          EventService,
          HttpClient,
          HttpHandler
      ]
    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
