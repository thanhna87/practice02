import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoClassBindingComponent } from './demo-class-binding.component';

describe('DemoClassBindingComponent', () => {
  let component: DemoClassBindingComponent;
  let fixture: ComponentFixture<DemoClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoClassBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
