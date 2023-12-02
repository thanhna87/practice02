import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoPropertyBindingComponent } from './demo-property-binding/demo-property-binding.component';
import { DemoClassBindingComponent } from './demo-class-binding/demo-class-binding.component';
import { DemoStyleBindlingComponent } from './demo-style-bindling/demo-style-bindling.component';
import { DemoEventBindingComponent } from './demo-event-binding/demo-event-binding.component';
import { DemoPipeCustomComponent } from './demo-pipe-custom/demo-pipe-custom.component';
import { DemoBindingAllComponent } from './demo-binding-all/demo-binding-all.component';
import { DemoHostlistenerComponent } from './demo-hostlistener/demo-hostlistener.component';
import { LifeCycleComponentComponent } from './life-cycle/life-cycle-component/life-cycle-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    DemoPropertyBindingComponent, 
    DemoClassBindingComponent, 
    DemoStyleBindlingComponent, 
    DemoEventBindingComponent,
    DemoPipeCustomComponent,
    DemoBindingAllComponent,
    DemoHostlistenerComponent,
    LifeCycleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parrentValue:string = "Hello from parrent value"
  title = 'practice Angular';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(()=>
    this.parrentValue="Hello from parrent value after 5s"
    ),5000
  }
}
