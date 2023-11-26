import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindingAllComponent } from './demo-binding-all.component';

describe('DemoBindingAllComponent', () => {
  let component: DemoBindingAllComponent;
  let fixture: ComponentFixture<DemoBindingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoBindingAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoBindingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
