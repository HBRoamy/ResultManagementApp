import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { studentModel } from './StudentModel/studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

 
  ApiUrl: string = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(this.ApiUrl + 'students')

    //use subscribe inside conmponent in which we call this fn subscribe(data=>{ do something with data})
    // then also data.success this.router.navigate(['YourPath']). inside ctor private router: Router from @angular/Router
  }

  getStudent(RollNo: number) {
    //const toCheck = this.http.get(this.ApiUrl + 'students/search?rollno='+ studentObj.RollNo + '&DOB=' + studentObj.DOB);
    const toCheck = this.http.get(this.ApiUrl + 'students/' + RollNo)

    return toCheck;


  }

  addStudent(newStudent: any) {
    //console.warn(newStudent);
    return this.http.post<any>(this.ApiUrl + 'students', newStudent);
  }

  editStudent(rollNo:Number,newStudent1:any)
  {
    return this.http.post<any>(this.ApiUrl+ 'students/' + rollNo ,newStudent1);
  }

  deleteStudent(rollno:any) {
    
    return this.http.delete(this.ApiUrl + 'students/'+rollno)
  }
}



// ,  {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': newStudent.length
//   }
// }