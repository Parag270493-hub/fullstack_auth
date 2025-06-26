import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  };
  constructor(private auth: AuthService, private route: Router) { }

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.auth.register(this.user).subscribe(
      res => {
        alert('User registered!');
        this.route.navigate(['/login']);
      },
      err => {
        alert('Registration failed');
        console.error(err);
      }
    );
  }
}
