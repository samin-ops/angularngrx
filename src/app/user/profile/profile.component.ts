import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../store/user.services';
import {toSignal} from '@angular/core/rxjs-interop'

import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  //user = signal({}) // signal

  profileForm!: FormGroup

  user = toSignal(this.userService.getUser())

  fullName = computed(()=>this.user()?.name.firstname + ' ' + this.user()?.name.lastname)

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: [this.user()?.id],
      firstName: [this.user()?.name.firstname],
      lastName: [this.user()?.name.lastname],
      email: [this.user()?.email],
      phone: [this.user()?.phone],
      address: this.fb.group({  //nested form group
        street: [this.user()?.address.street],
        city: [this.user()?.address.city],
        zipcode: [this.user()?.address.zipcode],
        geolocation: this.fb.group({  //nested form group
          latitude: [this.user()?.address.geolocation.lat],
          longitude: [this.user()?.address.geolocation.long]
        })
      }),
    })
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
