import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showPassword: boolean=false;

  get passwordFieldType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  // Toggle the password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


}
