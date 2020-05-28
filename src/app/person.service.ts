import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private personArr: Person[] =[
  new Person("Sam","Racecar driving"),
  new Person("Joni","getting lit")
];
  constructor() { }
  getPerson():Person[]{
    return this.personArr;
}
}