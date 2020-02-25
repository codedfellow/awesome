import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  people = [
    {
      name: 'Elvis Aghaulor',
      gender: 'male',
      occupation: 'Developer',
      age: 17
    },
    {
      name: 'Sarah Eke',
      gender: 'female',
      occupation: 'Implementation expert',
      age: 20
    },
    {
      name: 'Okechukwu Anyanwu',
      gender: 'male',
      occupation: 'Software analyst',
      age: 35
    },
    {
      name: 'Zino Sage',
      gender: 'male',
      occupation: 'Project manager',
      age: 20
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
