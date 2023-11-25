import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoEventBindingComponent } from './demo-event-binding.component';

describe('DemoEventBindingComponent', () => {
  let component: DemoEventBindingComponent;
  let fixture: ComponentFixture<DemoEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoEventBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
