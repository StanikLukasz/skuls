import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- WAŻNE!
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-landing',
  imports: [
    RegisterFormComponent, 
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  
  constructor(private http: HttpClient) {
  }

  registrationData = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'birthDate': '',
  };

  payload = {"body": this.registrationData}

  payload_nowy = {"body":
    {
    "firstName": "Antek",
    "lastName": "Zenty",
    "email": "moj4@mail.to",
    "birthDate": "12-12-2021",
    "password": "asdfg"
    }
   }


  showModal = false;
  modalType: 'login' | 'register' | null = null;

  openModal(type: 'login' | 'register') {
    this.modalType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.modalType = null;
  }

  onSubmit() {

    console.log('Wysyłane dane:', this.payload);

    const apiUrl = 'https://pznukfy1hd.execute-api.eu-central-1.amazonaws.com/default/python-registerUser';

    this.http.post(apiUrl, this.payload).subscribe({
      next: (response) => { 
        console.log('Sukces!', response);
        this.showModal = true;
        this.modalType = "login";
      },
      error: (error) => { 
        console.error('Błąd przy wysyłce:', error);
      }
    });
  }


}
