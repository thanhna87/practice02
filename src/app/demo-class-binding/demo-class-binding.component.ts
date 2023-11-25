import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-class-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-class-binding.component.html',
  styleUrl: './demo-class-binding.component.css'
})
export class DemoClassBindingComponent {
  errorFlagBindingFromComponent: boolean = true;
}
