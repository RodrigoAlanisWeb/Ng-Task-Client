import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path:'',pathMatch: "full",redirectTo:"tasks" },
  { path:'register',component: RegisterComponent },
  { path:'login',component: LoginComponent },
  { path:'tasks',component: TasksComponent, canActivate: [AuthGuard]},
  { path:'edit/:id',component: EditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
