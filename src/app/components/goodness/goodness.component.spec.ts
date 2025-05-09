import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodnessComponent } from './goodness.component';

describe('GoodnessComponent', () => {
  let component: GoodnessComponent;
  let fixture: ComponentFixture<GoodnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
