import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNewRequestComponent } from './header-new-request.component';

describe('HeaderNewRequestComponent', () => {
  let component: HeaderNewRequestComponent;
  let fixture: ComponentFixture<HeaderNewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
