import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
 
function symbolValidator(control:any){
if (control.hasError('required')) return null;
if (control.hasError('minlength')) return null;

  if (control.value.indexOf ('@') > -1){
  return null
} else{
  return {symbol : true}
}
  
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


registerForm!: FormGroup;


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name: ['', Validators.required] ,
      email: ['',[Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['',[ Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ['', ]
  
    })
  }

register(){
  console.log(this.registerForm.value)
}

}
