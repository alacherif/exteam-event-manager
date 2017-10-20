import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { EditEventComponent } from './editEvent.component';
import { ActivatedRoute } from '@angular/router';

describe('Edit Event Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditEventComponent
      ],
      providers:[
        HttpClient,
        HttpHandler,
        ActivatedRoute
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the Componenent', async(() => {
    const fixture = TestBed.createComponent(EditEventComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
