import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arr-add',
  templateUrl: './arr-add.component.html',
  styleUrls: ['./arr-add.component.css']
})

export class ArrAddComponent {
[x: string]: any;
user:any;
arr:any=[];

constructor(){}

ngOnInit(){}

add(){
  this.arr.push(this.user);
}

//push and pop
Username:string="Enter Name";

arr1:any=[];
onClick(myUser: { value: any; }){
if(myUser.value.length > 0){
  this.arr1.push(myUser.value);
  myUser.value=''; 
}

}
onDelete(userNo: any){
  this.arr1.splice(userNo,1);//1 value deleted at a time
}

isUpdate:boolean=false;
// currIndex:any;


onEdit(myUser:any){
this.isUpdate=true;

  this['personForm'].setValue(myUser);
}
}
