import { AppConfig } from './../../AppConfig/appconfig.interface';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONGIF } from './../../AppConfig/appconfig.service';
import { RoomList } from './../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [{
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

  constructor(@Inject(APP_SERVICE_CONGIF) private config: AppConfig) { 
    console.log("initialized Room Services");
    console.log(this.config.apiEndpoint);
    
  }

  getRooms(){
    return this.roomList;
  }

}
