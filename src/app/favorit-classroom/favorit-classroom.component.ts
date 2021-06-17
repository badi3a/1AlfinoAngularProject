import {Component, OnInit} from '@angular/core';
import {Classroom} from '../model/classroom';
import {TraitementService} from '../services/traitement.service';

@Component({
  selector: 'app-favorit-classroom',
  templateUrl: './favorit-classroom.component.html',
  styleUrls: ['./favorit-classroom.component.css']
})
export class FavoritClassroomComponent implements OnInit {
  favoritList: Classroom[];

  constructor(private servTrai: TraitementService) {
  }
  ngOnInit(): void {
    this.favoritList = [
      {id: 1, title: 'Classroom Angular-2alinfo', description: 'Group Vermeg', nbrParticipant: 0},
      {id: 2, title: 'Classroom Angular', description: 'Group Focus', nbrParticipant: 20}];
  }

  apply(c: Classroom) {
    this.servTrai.apply(c, this.favoritList);
  }

}
