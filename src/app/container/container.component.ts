import { EmployeeComponent } from './../employee/employee.component';
import { AfterContentInit, Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit {
  

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Vallabh Yelsangikar"
  }

}
