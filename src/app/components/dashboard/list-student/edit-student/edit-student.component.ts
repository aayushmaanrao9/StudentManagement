import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  message: boolean = false;
  constructor(
    private studentsService: StudentsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //console.log(this.router.snapshot.params['id']);
    this.studentsService
      .getStudentById(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
        console.log(res);
        this.editStudent = new FormGroup({
          name: new FormControl(res['name']),
          email: new FormControl(res['email']),
        });
      });
  }
  onCancel() {
    this.editStudent.reset();
  }
  updateData() {
    //console.log(this.editStudent.value);
    this.studentsService
      .updateStudent(this.router.snapshot.params['id'], this.editStudent.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.editStudent.reset();
    this.message = true;
  }

  removeAlert() {
    this.message = false;
  }
}
