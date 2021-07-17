import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddPersonComponent } from './question-add-person.component';

describe('QuestionAddPersonComponent', () => {
  let component: QuestionAddPersonComponent;
  let fixture: ComponentFixture<QuestionAddPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAddPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
