import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelname: string = "Marriot Hotel";
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 11,
    bookedRooms: 5
  }
  title = "Rooms List"
  numberOfRooms = this.rooms.totalRooms

  roomList: RoomList[] = []

  stream = new Observable(observer =>{
    observer.next('user 1'),
    observer.next('user 2'),
    observer.next('user 3')
    observer.complete()
  })


  selectedRoom !: RoomList


  constructor(private roomsService:RoomsService) { }

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    this.headerComponent.headertitle = "Hello World this is Your Hotel Inventory Website"

    this.headerChildrenComponent.last.headertitle = "Last header Title"
  }

  ngAfterViewChecked(): void {

  }


  ngDoCheck(): void {
    console.log('on change is called');
    
  }

  ngOnInit(): void {

    console.log(this.headerComponent);
    
    this.stream.subscribe({
      next: (value)=>console.log(value),
      complete: ()=>console.log('complete'),
      error: (err)=>console.log(err)
    })

    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList =  rooms;
    }); 
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms Available"
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '6',
      roomType: 'Homeless',
      amenities: 'WiFi, TV, Mini Bar, Ocean View, Private Pool, Butler Service',
      price: 300,
      photos: 'https://example.com/photos/presidential-suite.jpg',
      checkInTime: new Date('15-May-2024'),
      checkOutTime: new Date('18-June-2024'),
      rating: 3.3
    };

    // this.roomList.push(room);
    this.roomsService.addRooms(room).subscribe((data) =>{
      this.roomList = data;
    });
  }

  editRooms() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'TownShips',
      amenities: 'WiFi, TV, Mini Bar',
      price: 4000,
      photos: 'https://example.com/photos/presidential-suite.jpg',
      checkInTime: new Date('15-Dec-2024'),
      checkOutTime: new Date('18-Jan-2025'),
      rating: 3.5
    };
  
    this.roomsService.editRooms(room).subscribe((updatedRooms) => {
      this.roomList = updatedRooms;
    });
  }
}