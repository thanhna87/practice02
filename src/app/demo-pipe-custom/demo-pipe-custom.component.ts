import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-pipe-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-pipe-custom.component.html'
})
export class DemoPipeCustomComponent {
  subject:string = 'Khóa học Angular'
}
