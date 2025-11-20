import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDash1Component } from './todo-dash1.component';

describe('TodoDash1Component', () => {
  let component: TodoDash1Component;
  let fixture: ComponentFixture<TodoDash1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDash1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
