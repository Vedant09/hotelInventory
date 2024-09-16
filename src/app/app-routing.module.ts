import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "employee" , component: EmployeeComponent
  },
  {
    path : "rooms" , component: RoomsComponent
  },
  {
    path : "" ,redirectTo:"/rooms", pathMatch: 'full'
  },
  {
    path : "**" ,component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
