import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductlistComponent } from './modules/productlist/productlist.component';
import { AgePipe } from './pipes/age.pipe';
import { StarPipe } from './components/star.pipe';
import { StarComponent } from './components/star/star.component';
import { MemberAdminComponent } from './components/member-admin/member-admin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ProjectAdminComponent } from './components/project-admin/project-admin.component';
import { HeaderEmployeeComponent } from './components/header-employee/header-employee.component';
import { ListWorkEmployeeComponent } from './components/list-work-employee/list-work-employee.component';
import { NavbarEmployeeComponent } from './components/navbar-employee/navbar-employee.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AddMemberComponent } from './modules/add-member/add-member.component';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { AddTaskComponent } from './modules/add-task/add-task.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    AgePipe,
    StarPipe,
    StarComponent,
    MemberAdminComponent,
    NavbarAdminComponent,
    ProjectAdminComponent,
    HeaderEmployeeComponent,
    ListWorkEmployeeComponent,
    NavbarEmployeeComponent,
    SigninComponent,
    SignupComponent,
    AddMemberComponent,
    AddProjectComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
