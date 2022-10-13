import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}
  getAllStudents() {
    return this.http.get(this.url);
  }

  addStudentData(data: any) {
    return this.http.post(this.url, data);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateStudent(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
