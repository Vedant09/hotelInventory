import { RoomList } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase();
   }
  }
  ngOnInit(): void {
   
  }
  @Input() roomsList: RoomList[] | null = []

  @Input() title: String='';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

  ngOnDestroy(): void {
      console.log("on destory is called");
      
  }
}
