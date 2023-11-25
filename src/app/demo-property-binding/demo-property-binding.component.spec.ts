import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPropertyBindingComponent } from './demo-property-binding.component';

describe('DemoPropertyBindingComponent', () => {
  let component: DemoPropertyBindingComponent;
  let fixture: ComponentFixture<DemoPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPropertyBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
