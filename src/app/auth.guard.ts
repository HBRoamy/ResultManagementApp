import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthServiceService, private router: Router){

  }
  canActivate() {
    
      if(this.authService.isTeacher){
        //console.warn("inside auth guard (is it a teacher): "+ this.authService.isTeacher)
        return this.authService.isTeacher;
      }
      //console.warn("inside auth guard (is it a teacher) and login page: "+ this.authService.isTeacher)
      this.router.navigate(['/login']);
      return this.authService.isTeacher;
      
  }
  
}
