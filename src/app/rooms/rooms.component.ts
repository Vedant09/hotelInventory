import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  hotelname: string = "Marriot Hotel";
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 11,
    bookedRooms: 5
  }
  numberOfRooms = this.rooms.totalRooms

  roomList: RoomList[] = []
  selectedRoom !: RoomList
  constructor() {}

  ngOnInit(): void {
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

  selectRoom(room:RoomList){
    this.selectedRoom = room;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  addRoom(){
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
    this.roomList = [...this.roomList,room]
  }
}