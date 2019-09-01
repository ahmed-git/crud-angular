import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  submitted: boolean = false;
  users: User[];
  index = 0;
  userForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.users = JSON.parse(localStorage.getItem('listTodo'));

    
  }
  addUser() {
    this.submitted = true;
    if(this.userForm.valid) {
      let user = new User(this.userForm.value.firstName, this.userForm.value.lastName);
      this.users.push(user);
      localStorage.setItem('listTodo', JSON.stringify(this.users));
      this.userForm.reset();
      this.submitted = false;
      this.router.navigate(['/dash/users']);
    }
    
    
  }

  

  selectUser(i): void {
    this.index = i;
    // this.userFormModif.controls.firstName.setValue(user.firstName);
    // this.userFormModif.controls.lastName.setValue(user.lastName);  
  }

}
