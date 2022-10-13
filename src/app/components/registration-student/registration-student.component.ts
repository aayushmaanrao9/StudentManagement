import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css'],
})
export class RegistrationStudentComponent implements OnInit {
  message: boolean = false;
  registerForm: FormGroup;
  url = 'http://localhost:3000/registeredUsers';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      confirmPassword: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
    });
  }
  register() {
    this.http.post(this.url, this.registerForm.value).subscribe((res) => {
      this.message = true;
      this.registerForm.reset();
      setTimeout(() => this.router.navigate(['login']), 10000);
    });
  }
  removeAlert() {
    this.message = false;
  }
}
