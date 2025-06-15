import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgForVsFor } from './structural-directive-ng-for-vs-for';

describe('StructuralDirectiveNgForVsFor', () => {
  let component: StructuralDirectiveNgForVsFor;
  let fixture: ComponentFixture<StructuralDirectiveNgForVsFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgForVsFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgForVsFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
