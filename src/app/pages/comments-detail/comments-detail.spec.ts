import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsDetail } from './comments-detail';

describe('CommentsDetail', () => {
  let component: CommentsDetail;
  let fixture: ComponentFixture<CommentsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
