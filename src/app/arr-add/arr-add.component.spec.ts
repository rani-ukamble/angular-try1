import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrAddComponent } from './arr-add.component';

describe('ArrAddComponent', () => {
  let component: ArrAddComponent;
  let fixture: ComponentFixture<ArrAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrAddComponent]
    });
    fixture = TestBed.createComponent(ArrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
