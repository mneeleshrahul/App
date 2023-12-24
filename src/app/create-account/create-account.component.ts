// // create-account.component.ts

// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-create-account',
//   templateUrl: './create-account.component.html',
//   styleUrls: ['./create-account.component.css'],
// })
// export class CreateAccountComponent {
//   // Assuming you have defined these properties in your component
//   firstName: string = '';
//   lastName: string = '';
//   username: string = '';
//   email: string = '';
//   password: string = '';
//   dateOfBirth: string = '';
//   gender: string = '';
//   errorMessage: string = '';  // Add this property for error handling

//   constructor(private authService: AuthService) {}

//   createUser() {
//     const newUser = {
//       email: this.email,
//       gender: this.gender,
//       lastName: this.lastName,
//       password: this.password,
//       firstName: this.firstName,
//       username: this.username,
//       dateOfBirth: this.dateOfBirth,
//     };

//     this.authService.register(newUser).subscribe(
//       (response: any) => {
//         console.log('User created successfully:', response);
//         // Handle successful user creation, navigate to other pages, etc.
//       },
//       (error: any) => {
//         console.error('Error creating user:', error);

//         // Log more details to the console for debugging
//         console.log('Error status:', error.status);
//         console.log('Error body:', error.error);

//         // Set a more informative error message based on the HTTP status code
//         if (error.status === 409) {
//           this.errorMessage = 'User with the same username already exists.';
//         } else {
//           this.errorMessage = 'An unexpected error occurred during user creation. Please try again later.';
//         }
//       }
//     );
//   }
// }
// create-account.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  // Assuming you have defined these properties in your component
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  errorMessage: string = '';  // Add this property for error handling
  router: any;

  constructor(private authService: AuthService) {}

  createUser() {
    const newUser = {
      email: this.email,
      gender: this.gender,
      lastName: this.lastName,
      password: this.password,
      firstName: this.firstName,
      username: this.username,
      dateOfBirth: this.dateOfBirth,
    };

    this.authService.register(newUser).subscribe(
      (response: any) => {
        console.log('User created successfully:', response);
        // Navigate to the login page upon successful user creation
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error creating user:', error);
  
        // Display a user-friendly error message
        // For example, you can check the error status and display different messages accordingly
        if (error.status === 400) {
          // Bad request - user entered invalid data
          alert('Invalid data. Please check your inputs and try again.');
        } else if (error.status === 500) {
          // Internal server error
          alert('An unexpected error occurred. Please try again later.');
        } else {
          // Other error cases
          alert('Something went wrong. Please try again later.');
        }
      }
    );
  
  }
}
