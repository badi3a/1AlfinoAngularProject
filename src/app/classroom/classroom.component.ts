import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classroom} from '../model/classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  @Input() c: Classroom;
  @Output() incrmentEvent = new EventEmitter<Classroom>();
  constructor() {
  }

  ngOnInit(): void {

  }
  notifParent(){
    this.incrmentEvent.emit(this.c);
  }
}
