import { Component, OnInit } from '@angular/core';

export interface profesorAtrib {
  curso: string;
  nameProf: string;

}

const profeList: profesorAtrib[] = [
  {curso: 'PMDM', nameProf: 'Miguel Campos'},
  {curso: 'SGE', nameProf: 'Luis Miguel'},
  {curso: 'AC', nameProf: 'Luis Miguel'},
  {curso: 'DI', nameProf: 'Miguel Campos'},
 

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
