import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import { LoginService } from '../store/login.service';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
//import { selectedUserSuccess } from '../store/user.selectors';
import { authActions } from '../store/user.actions';
import { combineLatest } from 'rxjs';
import { selectErrors, selectIsLoading, selectIsSubmitting } from '../store/user.reducers';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  private userService = inject(LoginService)

  private store= inject(Store)

  // combineLatest => selector
  user$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    errors: this.store.select(selectErrors),
    isLoading: this.store.select(selectIsLoading)
  })


  search = new FormControl('');
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    username:new FormControl("", [Validators.required, Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
  })

  login(){
    if(this.loginForm.valid){
      const username = this.loginForm.get('username')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';
      this.store.dispatch(authActions.login({username, password}))
      this.userService.login(username, password).subscribe({
        next: (token) =>{
          console.log('token:', token);
          this.userService.isLoggedIn = true
          this.router.navigateByUrl("/product")

        }
      })
    }
  }

}
