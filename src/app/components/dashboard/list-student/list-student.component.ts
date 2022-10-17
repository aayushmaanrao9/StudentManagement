import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  studentData: any = [];
  change: boolean = false;
  // dtOptions: DataTables.Settings = {};
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe((data) => {
      this.studentData = data;
    });
    // this.dtOptions = {
    //   pageLength: 5,
    //   pagingType: 'full_numbers',                    Used for Pagination
    //   lengthMenu: [5, 10, 15, 20, 25, 30],
    //   processing: true,
    // };
  }
  onDelete(id: number) {
    this.studentsService.deleteStudent(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
  editPage() {
    this.change = true;
  }
}
