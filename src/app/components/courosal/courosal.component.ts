import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courosal',
  templateUrl: './courosal.component.html',
  styleUrls: ['./courosal.component.scss']
})
export class CourosalComponent implements OnInit {

  role:any = [
    'Full Stack Developer',
    'software Developer graduate',
    'Junior team Leader/Developer'
  ]


  timeLeft:number = this.role.length*3;
  interval;
  show:any;
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.role);
    
   this.startTimer();
    
  }



startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.show = this.role[this.count]
        if(this.timeLeft % 3 === 0)
        {
          this.count++;
        }

      } else {
        this.timeLeft = this.role.length*3;
        this.count = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
