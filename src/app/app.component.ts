import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cors-test';

  constructor(private http: HttpClient){
    this.http.get('https://google.com').pipe(first()).subscribe((data) => {console.log(data)} );
  }
}
