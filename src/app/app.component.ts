import { Component } from '@angular/core';
import { COURSES } from './db-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lernen';

  
  courses:any = COURSES;

  onEigeneFunktion(irgendwas:any){
    console.log(irgendwas)
  }
}
