import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- WAŻNE!
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], // <-- umożliwia użycie [(ngModel)]
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {

  constructor(private http: HttpClient) {
  }

  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
  };

  payload = {"body": this.registrationData}
  
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  
  onSubmit() {

    console.log('Wysyłane dane:', this.registrationData);

    const apiUrl = 'https://pznukfy1hd.execute-api.eu-central-1.amazonaws.com/default/python-registerUser';

    this.http.post(apiUrl, this.registrationData).subscribe({
      next: (response) => { 
        console.log('Sukces!', response);
      },
      error: (error) => { 
        console.error('Błąd przy wysyłce:', error);
      }
    });
  }
}