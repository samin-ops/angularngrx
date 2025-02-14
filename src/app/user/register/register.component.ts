import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectErrors, selectIsLoading, selectIsSubmitting } from '../store/user.reducers';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,
      MatInputModule,
      MatButtonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  private store = inject(Store)

  registerForm!: FormGroup

  user$ = combineLatest({
      isSubmitting: this.store.select(selectIsSubmitting),
      errors: this.store.select(selectErrors),
      isLoading: this.store.select(selectIsLoading)
    })

  constructor(private fb: FormBuilder){}


  ngOnInit(){

    this.registerForm = this.fb.group({

            email: [''],
            phone: [''],
            name: this.fb.group({
              firstname: ['', Validators.required],
              lastname: [''],
            }),

             address: this.fb.group({//nested form group
              city: ['', Validators.required],
              street: [''],
              zipcode: [''],
              number: [''],
              geolocation: this.fb.group({//nested form group
                lat: ['', Validators.required],
                long: ['', Validators.required],
              }),

            })

          })

  }

  onRegister(){
    this.store.dispatch(this.registerForm.value)


  }



}


