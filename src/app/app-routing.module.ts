import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWorkEmployeeComponent } from './components/list-work-employee/list-work-employee.component';
import { MemberAdminComponent } from './components/member-admin/member-admin.component';
import { ProjectAdminComponent } from './components/project-admin/project-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { AddMemberComponent } from './modules/add-member/add-member.component';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { AddTaskComponent } from './modules/add-task/add-task.component';
import { ProductlistComponent } from './modules/productlist/productlist.component';
import { SigninComponent } from './modules/signin/signin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path: 'products',
    component: ProductlistComponent
    ,
    canActivate: [AuthGuard]
  },
  {
    path: 'member',
    component: MemberAdminComponent
  },
  {
    path: 'project',
    component: ProjectAdminComponent
  },
  {
    path: 'listwork',
    component: ListWorkEmployeeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
 
  },
  {
    path: 'member/add',
    component: AddMemberComponent
  },
  {
    path: ' ',
    component: AddProjectComponent
  },
  {
    path: 'listwork/add',
    component: AddTaskComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
