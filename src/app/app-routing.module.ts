import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStudentComponent } from './components/dashboard/list-student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/dashboard/list-student/list-student.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';
import { StudentDetailsComponent } from './components/dashboard/student-details/student-details.component';
import { SubjectsComponent } from './components/dashboard/subjects/subjects.component';

const routes: Routes = [
  { path: 'add', component: AddStudentComponent },

  // { path: 'list', component: ListStudentComponent },
  //{ path: 'login', component: LoginStudentComponent },
  { path: 'register', component: RegistrationStudentComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'details',
        component: StudentDetailsComponent,
      },
      {
        path: 'list',
        component: ListStudentComponent,
        children: [{ path: 'edit/:id', component: EditStudentComponent }],
      },

      {
        path: 'subjects',
        component: SubjectsComponent,
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
