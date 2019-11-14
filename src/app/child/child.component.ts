import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  course:any;
  @Input()
  courseIndex:number;

  @Output()
  eigeneFunktion = new EventEmitter<any>()

  viewCourse(){  
    this.eigeneFunktion.emit(this.course);
  }

  isImageVisible(){
    let xx = "22"
    console.log(xx);
    return this.course && this.course.iconUrl
    // return true  
   
  }

  constructor() { }

  ngOnInit() {
  }

}
