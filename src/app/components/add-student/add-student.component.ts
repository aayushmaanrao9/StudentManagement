import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudent: FormGroup;

  message: boolean = false;
  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService
  ) {}
  setFormState() {
    this.addStudent = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      email: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit(): void {
    this.setFormState();
  }
  onCancel() {
    this.addStudent.reset();
  }
  onSubmit() {
    // console.log(this.addStudent.value);
    this.studentsService
      .addStudentData(this.addStudent.value)
      .subscribe((res) => {
        // console.log(res);
      });
    this.addStudent.reset();
    this.message = true;
  }

  removeAlert() {
    this.message = false;
  }
}
function addStudentData() {
  throw new Error('Function not implemented.');
}
