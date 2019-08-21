import { Injectable } from '@angular/core';
import  { BehaviorSubject }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['fuck twins', 'ride a chopper', 'ride a truck', 'shoot a rifle'])
  goal = this.goals.asObservable()
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
}
