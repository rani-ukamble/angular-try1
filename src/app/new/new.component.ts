import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
// s:Array<number>;

// constructor(){
// this.s=[1,2,3,4];

  @Input()
  parentData!: string;
  
  @Output() public send=new EventEmitter<string>();

  ngOnInit(){
    this.send.emit("Child Data");
  }
}
