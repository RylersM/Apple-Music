import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})
export class LoginComponent {
onSubmit(form: NgForm){
  console.log(form);
  
}
}
