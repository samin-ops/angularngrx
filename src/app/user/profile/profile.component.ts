import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../store/user.services';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../store/user.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  //user = signal({}) // signal

  profileForm!: FormGroup;


  user = toSignal(this.userService.getUser());

  fullName = computed(
    () => this.user()?.name.firstname + ' ' + this.user()?.name.lastname
  );

  // get addresses(): FormArray {
  //   return this.profileForm.get('address') as FormArray
  // }

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: ['', Validators.required],
      email: [''],
      phone: [''],
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: [''],
      }),
      // premiere facon de faire
       address: this.fb.group({//nested form group
        city: ['', Validators.required],
        street: [''],
        zipcode: [''],
        number: [''],
        geolocation: this.fb.group({//nested form group
          lat: ['', Validators.required],
          long: ['', Validators.required],
        }),
      }),

      //address: this.fb.array([this.prepareAddressForm()]), //form array
    });
    this.loadProfile()

  }
 //deuxieme facon de faire
// prepareAddressForm(){
//      return this.fb.group({
//       city: ['', Validators.required],
//       street: [''],
//       zipcode: [''],
//       number: [''],
//       geolocation: this.fb.group({
//         lat: ['', Validators.required],
//         long: ['', Validators.required],
//       }),
//     })
//   }


  // addAddress(){
  //   this.addresses.push(this.prepareAddressForm())
  // }
  // resetAddress(){
  //   this.addresses.clear()
  // }
  // removeAddress(index:number){
  //   this.addresses.removeAt(index)
  // }

  loadProfile() {
    this.userService.getUser().subscribe(user=>{
      this.profileForm.patchValue(user)
      console.log(user);

    })

  }
}
