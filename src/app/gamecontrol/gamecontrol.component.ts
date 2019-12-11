import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() evenCounter = new EventEmitter();
  @Output() oddCounter = new EventEmitter();
  @Output() isOver = new EventEmitter();

  evenSecCount = 0;
  evenSecCountArray = [];
  oddSecCountArray = [];
  evenIntervalID;
  gameOver;

  constructor() { }

  ngOnInit() {
  }

  onStartGame($event) {
    this.evenIntervalID = setInterval(() => {
      this.evenSecCount++;
      if (this.evenSecCount % 2 === 0) {
       this.evenSecCountArray.push(this.evenSecCount);
      } else {
       this.oddSecCountArray.push(this.evenSecCount);
      }
       this.evenCounter.emit(this.evenSecCountArray);
       this.oddCounter.emit(this.oddSecCountArray);
     }, 1000);
 
 
   }
 
   onPauseGame($event) {
     clearInterval(this.evenIntervalID);
     this.gameOver = 'clicked';
     this.isOver.emit(this.gameOver);
   }

}
