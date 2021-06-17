import {Component, OnInit} from '@angular/core';
import {Classroom} from '../model/classroom';

@Component({
  selector: 'app-favorit-classroom',
  templateUrl: './favorit-classroom.component.html',
  styleUrls: ['./favorit-classroom.component.css']
})
export class FavoritClassroomComponent implements OnInit {
  favoritList: Classroom[];

  constructor() {
  }

  ngOnInit(): void {
    this.favoritList = [
      {id: 1, title: 'Classroom Angular-2alinfo', description: 'Group Vermeg', nbrParticipant: 0},
      {id: 2, title: 'Classroom Angular', description: 'Group Focus', nbrParticipant: 20}]
  }

}
