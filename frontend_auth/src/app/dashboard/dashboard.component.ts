import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe(
      (res: any) => {
        this.users = res;
      },
      err => {
        console.error('Failed to fetch users', err);
      }
    );
  }
}
