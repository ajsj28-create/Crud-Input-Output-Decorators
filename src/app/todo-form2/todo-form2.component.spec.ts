import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm2Component } from './todo-form2.component';

describe('TodoForm2Component', () => {
  let component: TodoForm2Component;
  let fixture: ComponentFixture<TodoForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
