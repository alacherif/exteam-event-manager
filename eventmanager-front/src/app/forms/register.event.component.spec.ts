import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegisterEventComponent } from './registerEvent.component';

describe('Register Event Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterEventComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the Componenent', async(() => {
    const fixture = TestBed.createComponent(RegisterEventComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
