import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  names:string[]
  constructor() {this.names = ['Ruspa','Bulldozer','Betoniera','Gru','Dumper','Autocarro','Escavatore','Terne','Pale','Motolivellatrici'] 
}
    
  ngOnInit(): void {
  }

}
