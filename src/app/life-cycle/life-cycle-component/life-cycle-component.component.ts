import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

function logger(msg:any){
  console.log(msg)
}

@Component({
  selector: 'app-life-cycle-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.css'
})
export class LifeCycleComponentComponent{
count:number=0
mess : string = 'hello'
@Input() valueFromParrent:string = '' //this is value be pushed from parrent component (app.component)

onMouseEnterDiv(){
  logger("on mouse here")
  this.count++
  logger(this.count)
};
constructor(){
  logger("constructor has been called")
}
ngOnDestroy():void{
logger("Constructor has been destroy")
}

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  logger(changes)
  logger("active ng on change from parrent")
  
}
ngOnInit():void{
  logger("ngOnInit has been called")
}

ngDocheck():void{
  logger("ngDocheck has been called")
}

clickToChange(){
  this.mess = "How are you!"  
};

ngAfterContentInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  logger("ng after content init")
}
}
