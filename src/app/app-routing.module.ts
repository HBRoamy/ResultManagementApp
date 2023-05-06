import { AuthGuard } from './auth.guard';
import { LoginComponentComponent } from './login-component/login-component.component';
import { studentModel } from './StudentModel/studentModel';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { FindResultComponent } from './student/find-result/find-result.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherUiComponent } from './teacher-ui/teacher-ui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'teacher', component: TeacherUiComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponentComponent },
  {path:'student',children: [
    {path:'add-record', component:AddStudentComponent, canActivate:[AuthGuard]},
    {path:'find-result', component:FindResultComponent},
    {path:'edit-result/:RollNo', component:EditStudentComponent, canActivate:[AuthGuard]}

  ]},
  //lazy loaded below
  //{ path: 'student', loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
