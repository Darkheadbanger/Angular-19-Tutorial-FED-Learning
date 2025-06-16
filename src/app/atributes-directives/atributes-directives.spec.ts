import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributesDirectives } from './atributes-directives';

describe('AtributesDirectives', () => {
  let component: AtributesDirectives;
  let fixture: ComponentFixture<AtributesDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtributesDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributesDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
