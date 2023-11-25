import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-event-binding.component.html',
  styleUrl: './demo-event-binding.component.css'
})
export class DemoEventBindingComponent {
  disFlag: boolean = false
  bcolor: string = "black"

  changeSomething() {
    this.disFlag = true
  }
  changeColor() { 
    if (this.bcolor == 'blue') {
      this.bcolor = 'black'
    } else { 
      this.bcolor = 'blue'
    }
    
  }
}
