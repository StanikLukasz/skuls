import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- WAŻNE!



@Component({
  selector: 'app-landing',
  imports: [RegisterFormComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  
  constructor(private http: HttpClient) {
  }

  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
  };

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

    console.log('Wysyłane dane:', this.registrationData);

    const apiUrl = 'https://pznukfy1hd.execute-api.eu-central-1.amazonaws.com/default/python-registerUser';

    this.http.post(apiUrl, this.registrationData).subscribe({
      next: (response) => { 
        console.log('Sukces!', response);
        this.showModal = false;
        this.modalType = null;
      },
      error: (error) => { 
        console.error('Błąd przy wysyłce:', error);
      }
    });
  }


}
