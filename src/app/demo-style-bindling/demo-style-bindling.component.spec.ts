import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStyleBindlingComponent } from './demo-style-bindling.component';

describe('DemoStyleBindlingComponent', () => {
  let component: DemoStyleBindlingComponent;
  let fixture: ComponentFixture<DemoStyleBindlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoStyleBindlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoStyleBindlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
