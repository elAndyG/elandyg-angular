import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(
      '%c Hey! You must write code. Feel free to check out the source code for this at: https://github.com/elandyg/elandyg-angular',
      'color:DodgerBlue'
    );
  }
}
