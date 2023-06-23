import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtryComponent } from './ftry.component';

describe('FtryComponent', () => {
  let component: FtryComponent;
  let fixture: ComponentFixture<FtryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtryComponent]
    });
    fixture = TestBed.createComponent(FtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
