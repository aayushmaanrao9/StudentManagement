import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  change: boolean = false;

  loggedInStudentData: any = [];
  url = 'http://localhost:3000/registeredUsers';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
    });
  }
  login() {
    this.http.get<any>(this.url).subscribe(
      (res) => {
        const student = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (student) {
          console.log(student);

          this.loggedInStudentData = student;
          alert('Logged in successfully!');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert('student not found!');
        }
      },
      (err) => {
        alert('something went wrong!');
      }
    );
  }
}
