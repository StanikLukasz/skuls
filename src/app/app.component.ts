import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FormsModule, 
    RegisterFormComponent, 
    LandingComponent, 
    CommonModule,
    RouterModule
  ]
})
export class AppComponent {
  register = false;

  constructor(){
    this.register = false
  }

  close() {
    console.log("hej")
  }

  signUp() {
    console.log("hello")
  }


}
