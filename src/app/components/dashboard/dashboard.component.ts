import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private service: StudentsService,

    @Inject(LoginPageComponent) private login
  ) {}
  studentId: any;

  ngOnInit(): void {
    this.service
      .getStudentById(this.login.loggedInStudentData['id'])
      .subscribe((id) => {
        this.studentId = id;
      });
  }
}
