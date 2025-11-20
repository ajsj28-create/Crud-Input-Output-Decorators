import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDash2Component } from './todo-dash2.component';

describe('TodoDash2Component', () => {
  let component: TodoDash2Component;
  let fixture: ComponentFixture<TodoDash2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDash2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
