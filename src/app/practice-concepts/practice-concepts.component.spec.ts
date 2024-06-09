import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeConceptsComponent } from './practice-concepts.component';

describe('PracticeConceptsComponent', () => {
  let component: PracticeConceptsComponent;
  let fixture: ComponentFixture<PracticeConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
