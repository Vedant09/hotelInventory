import { RoomsService } from './../rooms/services/rooms.service';
import { Component, Self } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers :[RoomsService]
})
export class EmployeeComponent {
  empName: string = "Vedant Yelsangikar";
  constructor(@Self() private roomsService:RoomsService){}
}
