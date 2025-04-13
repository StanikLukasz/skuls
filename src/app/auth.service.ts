import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // zapewnia, że serwis jest globalny (singleton)
})
export class AuthService {
  private isLoggedIn = false; // zmienna trzymająca stan zalogowania

  constructor() {}

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
