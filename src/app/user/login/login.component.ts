import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import { UserService } from '../store/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  private userService = inject(UserService)

  search = new FormControl('');
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    username:new FormControl("", [Validators.required, Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
  })

  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    if (username && password) {
      this.userService.login(username, password)
      .subscribe({
        next:((token)=>{
          console.log(token);
          ///localStorage.getItem('token')
          //this.userService.getToken()
          this.userService.isLoggedIn = true
          this.router.navigate(['/product']);
        }),
        error:((error)=>{
          console.log(error);
        })
      });
    } else {
      console.error('Username and password are required');
    }
  }

}
