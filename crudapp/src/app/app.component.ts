import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import { UserService } from './_helpers/user.service';
import { User } from './_helpers/user.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudapp'
  registerForm: FormGroup;
  users: User[] = [];
  submitted: boolean = false;
  buttonText: string = "Submit"
  // dboperation

  // inject the user service
  constructor(private _fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    // call the register form
    this.setFromState();
    this.getAllUsers();
  }
  setFromState() {
    this.registerForm = this._fb.group({
      id: [0],
      title: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // dob: ['', Validators.compose([Validators.required, Validators.pattern(/^d)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required],
    })
  }
  onSubmit() {
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  }
  onCancel() {
    this.registerForm.reset();
  }
  getAllUsers() {
    // service to be subscribe
    this._userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    },
    error => {
      console.error('There was an error!', error);
  }
    )
  }
  Edit(userId:number){
    alert(userId);
  }
  Delete(userId:number){
    this._userService.deleteUser(userId).subscribe((res:User[]) =>{
    this.getAllUsers();
    alert("Deleted successfully!")
    })
  }
}
