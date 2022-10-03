import { Component, OnInit } from '@angular/core';


export interface AlumnAtrib {
  name: string;
  surname: string;
  age: number;


}

const AlumnList: AlumnAtrib[] = [
  {name: 'Antonio', surname: 'Garcia',age: 22},
  
  

];

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.css']
})



export class ListProfComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
