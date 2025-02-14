import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLetterComponent } from './forms-letter.component';

describe('FormsLetterComponent', () => {
  let component: FormsLetterComponent;
  let fixture: ComponentFixture<FormsLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
