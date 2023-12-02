import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoHostListenerDirective } from './directive-demo-host-listener.directive';

@Component({
  selector: 'app-demo-hostlistener',
  standalone: true,
  imports: [CommonModule, DirectiveDemoHostListenerDirective],
  templateUrl: './demo-hostlistener.component.html',
  styleUrl: './demo-hostlistener.component.css'
})
export class DemoHostlistenerComponent {
  bcolor: string = "blue"
  color: string = ""

}
