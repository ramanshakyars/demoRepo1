import { Component } from '@angular/core';

@Component({
  selector: 'app-filterdata',
  templateUrl: './filterdata.component.html',
  styleUrls: ['./filterdata.component.scss']
})
export class FilterdataComponent {

  termFilter: string = ''; // Filter term input
  glossary: any[] = [
    {
      name: 'A',
      descriptions: [
        {
          term: 'Ad hoc Arbitration',
          definition:
            'UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration.',
        },
        {
          term: 'Adjudication',
          definition: 'Adjudication .',
          example: 'Imagine two companies working on a .',
        },
      ],
    },
    {
      name: 'B',
      descriptions: [
        {
          term: 'baba',
          definition:
            'UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration.',
        },
        {
          term: 'baba',
          definition: 'Adjudication .',
          example: 'Imagine two companies working on a .',
        },
      ],
    },
    {
      name: 'c',
      descriptions: [
        {
          term: 'card',
          definition:
            'UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration.',
        },
        {
          term: 'cada',
          definition: 'Adjudication .',
          example: 'Imagine two companies working on a .',
        },
      ],
    },
  ]; // Your JSON data here


}
