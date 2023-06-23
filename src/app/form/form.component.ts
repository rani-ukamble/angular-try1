import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f')
  form!: NgForm;
  defaultValue:string='teacher';
  genders=['male','female'];
  
  user={
    username:'',
    email:'',
    secret:'',
    gender:''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.setValue({
      username:suggestedName,
      email:'',
      secret:this.defaultValue,
      gender:'male'
    });
  }

  // onSubmit(form:HTMLFormElement ){
  //   console.log(form);
  // }

  onSubmit(form:NgForm ){
    console.log(form);
    this.user.username=this.form.value.username;
    this.user.email=this.form.value.email;
    this.user.secret=this.form.value.secret;
    this.user.gender=this.form.value.gender;
  }

   // onSubmit( ){
  //     console.log(this.form);
  //   }
}
