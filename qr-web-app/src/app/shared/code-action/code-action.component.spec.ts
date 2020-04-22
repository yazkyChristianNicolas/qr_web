import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeActionComponent } from './code-action.component';

describe('CodeActionComponent', () => {
  let component: CodeActionComponent;
  let fixture: ComponentFixture<CodeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
