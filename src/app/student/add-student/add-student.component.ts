import { AuthServiceService } from './../../auth-service.service';
import { Router } from '@angular/router';
import { StudentsDataService } from './../../students-data.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent{

  constructor(private Students_Data: StudentsDataService, private router: Router, private authService:AuthServiceService) {
      
  }
  alreadyPresent=false;
  addStud(val:any)
  {
    console.warn(val);
    this.Students_Data.addStudent(val).subscribe((data:any)=>{
      console.warn(data);
      if(data===true){
        this.alreadyPresent=true;
        
      }else
      {
        this.router.navigate(['/teacher']);
      }
    });
    
  }
  logout(){
    this.authService.logout()
  }

}
