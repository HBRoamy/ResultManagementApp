import { FindResultComponent } from './find-result/find-result.component';
import { AddStudentComponent } from './add-student/add-student.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path: 'add-record', component: AddStudentComponent },
  { path: 'find-result', component: FindResultComponent },
  { path: 'edit-result/:RollNo', component: EditStudentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
