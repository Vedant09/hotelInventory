import { shareReplay } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
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
  getRooms$;
  

  constructor(@Inject(APP_SERVICE_CONGIF) private config: AppConfig,
   private http : HttpClient) { 
    console.log("initialized Room Services");
    console.log(this.config.apiEndpoint);
    this.getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));
  }
 
  //get method
  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRooms(room : RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room);
  }

  editRooms(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRooms(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos',{
        reportProgress : true,
      });
      return this.http.request(request);
  }
}
