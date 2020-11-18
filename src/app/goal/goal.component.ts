import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]= [
    new Goal (1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal (2,  'Buy cookies', 'I have to buy cookies for the parrot'),
    new Goal (3,  'Get new Phone Case', 'Diana has her birthday coming up soon'),
    new Goal (4,  'Get dog food', 'Pupper likes expensive sancks'),
    new Goal (5,  'Solve math homework', 'Damn Math'),
    new Goal (6,  'Plot world domination', 'Cause I am an evil overlord'),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}