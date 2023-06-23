import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ftry',
  templateUrl: './ftry.component.html',
  styleUrls: ['./ftry.component.css']
})
export class FtryComponent {
  
  @ViewChild('f')
  form!: NgForm;

  user={
    username:'',
    password:''
  }

  onSubmit(form:NgForm){
    this.user.username=this.form.value.username;
    this.user.password=this.form.value.password;
  }
}
