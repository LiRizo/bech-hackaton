import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpRequestsComponent } from './follow-up-requests.component';

describe('FollowUpRequestsComponent', () => {
  let component: FollowUpRequestsComponent;
  let fixture: ComponentFixture<FollowUpRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
