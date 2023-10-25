import { Component } from '@angular/core';
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPhpTaskList';

  ngOnInit(): void {
    initTE({ Collapse, Ripple });
  }


}
