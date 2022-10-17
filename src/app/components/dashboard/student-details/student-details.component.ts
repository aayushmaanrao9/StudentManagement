import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit, AfterViewInit {
  detailsForm: FormGroup;

  url = 'http://localhost:3000/studentDetails';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private service: StudentsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      fullName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(20)]),
      ],
      class: ['', Validators.required],
      regNo: ['', Validators.required],
      bday: [''],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      subjects: ['', Validators.required],
    });
  }
  ngAfterViewInit(): void {
    this.service
      .getStudentById(this.router.snapshot.params['id'])
      .subscribe((res) => {
        console.log(res);
        this.detailsForm = new FormGroup({
          fullName: new FormControl(res['fullName']),
          email: new FormControl(res['email']),
        });
      });
  }
  saveDetails() {
    this.http.post(this.url, this.detailsForm.value).subscribe((res) => {
      // console.log(res);
      alert('Details saved successfully!!');
      this.detailsForm.reset();
    });
  }
}
