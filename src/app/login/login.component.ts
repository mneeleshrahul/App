// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  loginError: boolean = false;
  password: string = ''; // Assuming password is a string
  username: string = ''; // Assuming username is a string

  constructor(private authService: AuthService) {}

  login() {
    // Check if username and password are provided
    if (!this.username || !this.password) {
      console.error('Username and password are required.');
      // You might want to display an error message to the user
      return;
    }

    // Call the login method with the provided username and password
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Handle successful login, navigate to other pages, etc.
      },
      (error: any) => {
        console.error('Error during login:', error);
        // Handle error scenarios, show an error message, etc.
      }
    );
  }
}
