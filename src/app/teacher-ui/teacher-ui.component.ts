import { AuthServiceService } from './../auth-service.service';
import { Router } from '@angular/router';
import { StudentsDataService } from './../students-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-ui',
  templateUrl: './teacher-ui.component.html',
  styleUrls: ['./teacher-ui.component.css']
})
export class TeacherUiComponent implements OnInit{
  received_studs:any=[];
  totalStuds:number=0;

  constructor(private studentsData: StudentsDataService, private router: Router, private authService:AuthServiceService) {
   
  }
 
  ngOnInit(): void {
    this.studentsData.getAllStudents().subscribe(data=>{

      this.received_studs = data;
      
      //to sort the students roll-number-wise
      for(let i=0;i<this.received_studs.length;i++)
      {
        for(let j=0;j<this.received_studs.length;j++)
        if(this.received_studs[i].RollNo<this.received_studs[j].RollNo)
        {
          let temp = this.received_studs[i];
          this.received_studs[i]=this.received_studs[j];
          this.received_studs[j]=temp;
        }
      }

      this.totalStuds = this.received_studs.length;
      //this.router.navigate(['teacher']);
    });
    
  }


  ifNotDeleted:boolean =true;


  deleteStudent(rollNo:number){

    this.studentsData.deleteStudent(rollNo)
    .subscribe(data=>{
      //i had to do this as every time I did an operation, I had to refresh the page.
      this.received_studs=data;

      //to sort the students roll-number-wise
      for(let i=0;i<this.received_studs.length;i++)
      {
        for(let j=0;j<this.received_studs.length;j++)
        if(this.received_studs[i].RollNo<this.received_studs[j].RollNo)
        {
          let temp = this.received_studs[i];
          this.received_studs[i]=this.received_studs[j];
          this.received_studs[j]=temp;
        }
      }


      this.totalStuds=this.received_studs.length;
    });
    //this.router.navigateByUrl('/teacher');
   
    this.ifNotDeleted=false;
  }
  editStudentInfo(rollNo:number){
    this.router.navigate(['/student/edit-result/',rollNo]);
  }

  logout(){
    this.authService.logout()
  }
}


