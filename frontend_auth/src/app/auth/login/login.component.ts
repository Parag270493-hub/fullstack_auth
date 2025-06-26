import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    this.auth.login(this.user).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard']);
        this.auth.saveToken(res.token);
      },
      err => {
        alert('Login failed. User may not exist or wrong password.');
        console.error(err);
      }
    );
  }
}
