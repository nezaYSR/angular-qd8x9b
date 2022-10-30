import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Heat map sample skuy';
  response={
    x: 3,
    y: 2,
    result: 6,
  }

  color= '#4BA85E'

  boxes = [
   
    {
      row: [
        {
          x: 1,
          y: 1,
          result: 5,
          color: '#92D14F',
          predicate:'LTM',
        },
        {
          x: 2,
          y: 1,
          result: 10,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 3,
          y: 1,
          result: 15,
          color: '#FFC003',
          predicate:'MTH',
        },
        {
          x: 4,
          y: 1,
          result: 20,
          color: '#FE0000',
          predicate:'H',
        },
        {
          x: 5,
          y: 1,
          result: 25,
          color: '#FE0000',
          predicate:'H',
        },
      ],
    },

    {
      row: [
        {
          x: 1,
          y: 2,
          result: 4,
          color: '#92D14F',
          predicate:'LTM',
        },
        {
          x: 2,
          y: 2,
          result: 8,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 3,
          y: 2,
          result: 12,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 4,
          y: 2,
          result:16,
          color: '#FFC000',
          predicate:'MTH',
        },
        {
          x: 5,
          y: 2,
          result: 20,
          color: '#FB0102',
          predicate:'H',
        },
      ],
    },

    {
      row: [
        {
          x: 1,
          y: 3,
          result: 3,
          color: '#00AF50',
          predicate:'L',
        },
        {
          x: 2,
          y: 3,
          result: 6,
          color: '#92D04F',
          predicate:'LTM',
        },
        {
          x: 3,
          y: 3,
          result: 9,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 4,
          y: 3,
          result: 12,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 5,
          y: 3,
          result: 15,
          color: '#FFC000',
          predicate:'MTH',
        },
      ],
    },

    {
      row: [
        {
          x: 1,
          y: 2,
          result: 2,
          color: '#00AF50',
          predicate:'L',
        },
        {
          x: 2,
          y: 2,
          result: 4,
          color: '#92D14F',
          predicate:'LTM',
        },
        {
          x: 3,
          y: 2,
          result: 6,
          color: '#92D14F',
          predicate:'LTM',
        },
        {
          x: 4,
          y: 2,
          result: 8,
          color: '#FFFF00',
          predicate:'M',
        },
        {
          x: 5,
          y: 2,
          result: 10,
          color: '#FFFF00',
          predicate:'M',
        },
      ],
    },

    {
      row: [
        {
          x: 1,
          y: 1,
          result: 1,
          color: '#00AF50',
          predicate:'L',
        },
        {
          x: 2,
          y: 1,
          result: 2,
          color: '#00AF50',
          predicate:'L',
        },
        {
          x: 3,
          y: 1,
          result: 3,
          color: '#00AF50',
          predicate:'L',
        },
        {
          x: 4,
          y: 1,
          result: 4,
          color: '#92D14F',
          predicate:'LTM',
        },
        {
          x: 5,
          y: 1,
          result: 5,
          color: '#92D14F',
          predicate:'LTM',
        },
      ],
    },

  ];
}
