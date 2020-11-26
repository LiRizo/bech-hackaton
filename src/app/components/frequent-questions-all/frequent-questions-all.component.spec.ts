import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentQuestionsAllComponent } from './frequent-questions-all.component';

describe('FrequentQuestionsAllComponent', () => {
  let component: FrequentQuestionsAllComponent;
  let fixture: ComponentFixture<FrequentQuestionsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentQuestionsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentQuestionsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
