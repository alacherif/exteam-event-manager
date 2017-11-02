import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { EventManagerComponent } from './eventManager.component';
import { EventComponent } from '../shared/event/event.component';
import { EventService } from '../services/event.service';

describe('EventManagerComponent', () => {
  let component: EventManagerComponent;
  let fixture: ComponentFixture<EventManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventManagerComponent,
        EventComponent
      ],
      providers: [
        EventService,
        HttpClient,
        HttpHandler
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
