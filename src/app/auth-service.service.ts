import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  isTeacher=false;
  
  canTeacherLogin(val:boolean){
    this.isTeacher=val;
    //console.warn("Inside Service can teacher login: " + this.isTeacher)
    if(this.isTeacher){
      //return true;
    return this.router.navigate(['/teacher']);
    }
    return false;
  }
  logout(){
    this.isTeacher=false;
    this.router.navigate(['/']);
  }

  // canTeacherLogin(data:any){
  //   if(data.Name==='teacher' && data.Password==='123'){
      
  //     this.isTeacher = true;

  //   }
  //   this.isTeacher = false;
  // }

}
