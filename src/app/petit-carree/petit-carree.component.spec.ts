import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitCarreeComponent } from './petit-carree.component';

describe('PetitCarreeComponent', () => {
  let component: PetitCarreeComponent;
  let fixture: ComponentFixture<PetitCarreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitCarreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitCarreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
