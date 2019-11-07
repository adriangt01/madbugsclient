import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MadBugClient';
  model={id:"1",name:"Adrian"}
  name:string;
  arreglo=["Uno","Dos","Tres"];
  valor="";

  unclick(){
  this.arreglo.push(this.valor);
  this.valor="";
  
  }
}
