import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetail } from './todos-detail';

describe('TodosDetail', () => {
  let component: TodosDetail;
  let fixture: ComponentFixture<TodosDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
