import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(email: string, password: string): boolean {
    // Aqui você pode adicionar lógica de autenticação
    // Por enquanto, vamos apenas permitir qualquer login
    this.loggedIn = true;
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}