import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageComponent } from './service.component';

describe('ServiceComponent', () => {
  let component: ServicePageComponent;
  let fixture: ComponentFixture<ServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
