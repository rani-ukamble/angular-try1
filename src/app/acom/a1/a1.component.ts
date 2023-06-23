import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  EnterName="ABC";
  parentData=""


  value="";
  send(value: string){
this.value=value;
  }

TransferData(){
this.parentData=this.EnterName;
}

constructor(){

}
ngOnInit(): void {
    
}
}
