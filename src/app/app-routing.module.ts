import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { CoachListComponent } from './views/coach-list/coach-list.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: CoachListComponent,
    children: [{
      path: "", component: CoachListComponent
    }],
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
