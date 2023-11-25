import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-property-binding.component.html',
  styleUrl: './demo-property-binding.component.css'
})
export class DemoPropertyBindingComponent {
  subject: string = 'Angular Subject';
}
