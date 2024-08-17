import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'hotelinventory';
  role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton Hotles"
  }

  //ng template for component creation for ViewChild
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms=178
  // }

}