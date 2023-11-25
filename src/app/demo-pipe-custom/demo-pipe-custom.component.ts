import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-demo-pipe-custom',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './demo-pipe-custom.component.html'
})
export class DemoPipeCustomComponent {
  subject:string = 'Khóa học Angular'
}
