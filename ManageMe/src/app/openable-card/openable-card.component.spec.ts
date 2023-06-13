import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenableCardComponent } from './openable-card.component';

describe('OpenableCardComponent', () => {
  let component: OpenableCardComponent;
  let fixture: ComponentFixture<OpenableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenableCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
