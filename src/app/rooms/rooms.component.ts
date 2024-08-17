import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';


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



  selectedRoom !: RoomList


  constructor() { }

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

    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Suite',
      amenities: 'WiFi, TV, Mini Bar, Ocean View',
      price: 250,
      photos: 'https://example.com/photos/deluxe-suite.jpg',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('18-Dec-2024'),
      rating: 2.62
    },
    {
      roomNumber: 2,
      roomType: 'Standard Room',
      amenities: 'WiFi, TV, Air Conditioning',
      price: 100,
      photos: 'https://example.com/photos/standard-room.jpg',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('18-Dec-2024'),
      rating: 4.8268
    },
    {
      roomNumber: 3,
      roomType: 'Family Suite',
      amenities: 'WiFi, TV, Mini Bar, Kitchenette, Two Bedrooms',
      price: 300,
      photos: 'https://example.com/photos/family-suite.jpg',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('18-Dec-2024'),
      rating: 3.5234
    },
    {
      roomNumber: 4,
      roomType: 'Single Room',
      amenities: 'WiFi, TV',
      price: 75,
      photos: 'https://example.com/photos/single-room.jpg',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('18-Dec-2024'),
      rating: 3.3234
    },
    {
      roomNumber: 5,
      roomType: 'Presidential Suite',
      amenities: 'WiFi, TV, Mini Bar, Ocean View, Private Pool, Butler Service',
      price: 1000,
      photos: 'https://example.com/photos/presidential-suite.jpg',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('18-Dec-2024'),
      rating: 4.52342
    }
    ]
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
      roomNumber: 6,
      roomType: 'Homeless',
      amenities: 'WiFi, TV, Mini Bar, Ocean View, Private Pool, Butler Service',
      price: 300,
      photos: 'https://example.com/photos/presidential-suite.jpg',
      checkInTime: new Date('15-May-2024'),
      checkOutTime: new Date('18-June-2024'),
      rating: 3.3
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }
}