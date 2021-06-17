import {Component, OnInit} from '@angular/core';
import {Classroom} from '../model/classroom';
import {TraitementService} from '../services/traitement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  list: Classroom[];

  constructor(private servTrai: TraitementService) {
  }

  ngOnInit(): void {
    this.title = 'E-Leraning';
    this.list = [
      {id: 1, title: 'Classroom Angular-2alinfo', description: 'Group Vermeg', nbrParticipant: 0},
      {id: 2, title: 'Classroom Angular', description: 'Group Focus', nbrParticipant: 20},
      {id: 3, title: 'Classroom Angular-CS', description: 'Group ESPRIT', nbrParticipant: 10}
    ];
  }

  applyParent(c: Classroom) {
    this.servTrai.apply(c, this.list);
  }

}
