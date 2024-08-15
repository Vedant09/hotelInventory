import { RoomList } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
  @Input() roomsList : RoomList [] = []
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }
}
