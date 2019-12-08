import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'name variable in home.component.ts';

  constructor() { }

  ngOnInit() {
  }

  countClick(){
    this.clickCounter += 1;
  }



  setClasses(){
    let myClasses = {
      active: this.clickCounter > 6,
      notactive: this.clickCounter <= 6,
    } 
    return myClasses;
  }

}
