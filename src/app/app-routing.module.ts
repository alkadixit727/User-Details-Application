import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

const routes: Routes = [
  {
    path : '',
    component: DashboardComponent, children:[{path:'',component: UserDetailsComponent}]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
