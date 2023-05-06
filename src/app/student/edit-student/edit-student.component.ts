import { AuthServiceService } from './../../auth-service.service';
import { StudentsDataService } from './../../students-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentData: StudentsDataService, private route: ActivatedRoute,  private router: Router, private authService:AuthServiceService) {

  }
  values:any="";
  ngOnInit(): void {

    const received: any = this.route.snapshot.paramMap.get("RollNo");
      this.studentData.getStudent(parseInt(received)).subscribe(data=>{
        this.values = data;
        console.warn(this.values)
      })
    
    
    // if value changes overtime
    // this.route.paramMap.subscribe(params => {
    //  this.values = params.get('RollNo');
    // }); 

  }

  editForm = new FormGroup({

    //RollNo: new FormControl(this.values.RollNo, [Validators.required, Validators.min(100), Validators.max(999)]),
    Name: new FormControl(this.values.Name, [Validators.required, Validators.pattern('^([a-zA-Z ]+)$')]),
    DOB: new FormControl(this.values.DOB, [Validators.required, Validators.pattern('^([0-9][0-9])-([0-1][0-9])-([1-2][0-9][0-9][0-9])$')]),
    Score: new FormControl(this.values.Score, [Validators.required, Validators.min(0), Validators.max(500)])
  });
alreadyPresent:boolean=false;
  onSubmit(newValues:any) {
    newValues.RollNo = this.values.RollNo;
    this.studentData.editStudent(this.values.RollNo, newValues).subscribe();
    this.router.navigate(['/teacher']);

    // (data:any)=>{
    //   if(data===true){
    //     this.alreadyPresent=true;
    //   }else{
    //   }
    // }
    
  }
  logout(){
    this.authService.logout();
  }

}
