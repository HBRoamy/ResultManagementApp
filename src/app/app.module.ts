import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';
import { StudentsDataService } from './students-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherUiComponent } from './teacher-ui/teacher-ui.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeacherUiComponent,
    PageNotFoundComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,// if lazy loaded then can be removed
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [StudentsDataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
