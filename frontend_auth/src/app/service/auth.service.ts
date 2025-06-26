import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${this.API}/register`, data);
  }

  login(data: any) {
    return this.http.post<{ token: string }>(`${this.API}/login`, data);
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth-token', token);
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth-token');
    }
    return null;
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  loggedOut() {
    localStorage.removeItem('auth-token');
  }

  getUsers() {
    return this.http.get<any[]>(`${this.API}/users`, {
      headers: { Authorization: this.getToken() || '' }
    });
  }
}
