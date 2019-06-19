import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlastComponent } from './email-blast.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('EmailBlastComponent', () => {
  let component: EmailBlastComponent;
  let fixture: ComponentFixture<EmailBlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailBlastComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
