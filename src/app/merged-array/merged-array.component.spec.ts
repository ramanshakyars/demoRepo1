import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergedArrayComponent } from './merged-array.component';

describe('MergedArrayComponent', () => {
  let component: MergedArrayComponent;
  let fixture: ComponentFixture<MergedArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergedArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergedArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
