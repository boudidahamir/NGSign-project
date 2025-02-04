import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @ViewChild('userForm') userForm!: NgForm;
  user: User = { name: '', email: '', password: '' };

  constructor(private userService: UserService) {}

  addUser(): void {
    if (!this.user.name || !this.user.email || !this.user.password) {
      alert('All fields are required.');
      return;
    }
    this.userService.addUser(this.user).subscribe({
      next: () => {
        alert('User added successfully');
        this.userForm.resetForm();
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Failed to add user.');
      }
    });
  }
}
