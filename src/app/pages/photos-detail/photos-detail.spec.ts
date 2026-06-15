import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDetail } from './photos-detail';

describe('PhotosDetail', () => {
  let component: PhotosDetail;
  let fixture: ComponentFixture<PhotosDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
