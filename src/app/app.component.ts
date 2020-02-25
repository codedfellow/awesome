import { Component, NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  title = 'Awesome';
  
  
  
}
