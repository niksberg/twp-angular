import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhatwedoComponent } from './about-whatwedo.component';

describe('AboutWhatwedoComponent', () => {
  let component: AboutWhatwedoComponent;
  let fixture: ComponentFixture<AboutWhatwedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWhatwedoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWhatwedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
