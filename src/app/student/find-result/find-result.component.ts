import { AuthServiceService } from './../../auth-service.service';
import { Router } from '@angular/router';
import { StudentsDataService } from './../../students-data.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {

  notPresent:boolean=true;
  studFound:boolean=false;
  foundStudent:any;

  constructor(private students_Data:StudentsDataService, private router:Router, private authService:AuthServiceService) {
      
  }
  ngOnInit(): void {
    
  }

  findStudent(student:any)
  {
    //console.warn(student);
    this.students_Data.getStudent(student.RollNo).subscribe((data:any)=>
    {
      if(data)
      {
        if(data.DOB===student.DOB)
        {
          this.studFound=true;
          this.notPresent=true; // it is a grammatical mistake
          console.warn(this.studFound);
          this.foundStudent=data;
          this.foundStudent.DOB = data.DOB;
        }
        else{
          this.notPresent=false;
        }
      }
      else{
        this.notPresent=false;
      }
    });
  }
  isTeacher = this.authService.isTeacher; 
  logout(){
    this.authService.logout();
  }
}
