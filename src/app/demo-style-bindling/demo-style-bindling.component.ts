import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-style-bindling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-style-bindling.component.html',
  styleUrl: './demo-style-bindling.component.css'
})
export class DemoStyleBindlingComponent {
  bcolor: string = "blue"
  bweight: string = "bold"
}
