import { Injectable } from '@angular/core';
import {Classroom} from '../model/classroom';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  constructor() { }
  apply(c: Classroom, list: Classroom[]) {
    let i = list.indexOf(c);
    if (i != -1) {
      list[i].nbrParticipant++;
    }
  }
}
