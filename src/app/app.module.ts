import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/dashboard/list-student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/dashboard/list-student/list-student.component';

import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentDetailsComponent } from './components/dashboard/student-details/student-details.component';
import { SubjectsComponent } from './components/dashboard/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    RegistrationStudentComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    DashboardComponent,
    StudentDetailsComponent,
    SubjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [LoginPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
