import { HttpClient } from '@angular/common/http';
import { AppConfig } from './../../AppConfig/appconfig.interface';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONGIF } from './../../AppConfig/appconfig.service';
import { RoomList } from './../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [
  ]

  constructor(@Inject(APP_SERVICE_CONGIF) private config: AppConfig,
  @Inject(HttpClient) private http : HttpClient) { 
    console.log("initialized Room Services");
    console.log(this.config.apiEndpoint);
    
  }

  //get method
  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }

}
