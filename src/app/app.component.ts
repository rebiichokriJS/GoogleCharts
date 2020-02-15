import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Daily Activities';

  myType = 'PieChart';
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Berlin', 3470000],
    ['Cairo', 19500000]
  ];
}
