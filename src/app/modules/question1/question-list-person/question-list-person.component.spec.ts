import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListPersonComponent } from './question-list-person.component';

describe('QuestionListPersonComponent', () => {
  let component: QuestionListPersonComponent;
  let fixture: ComponentFixture<QuestionListPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
