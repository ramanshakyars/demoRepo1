import { Component } from '@angular/core';

@Component({
  selector: 'app-merged-array',
  templateUrl: './merged-array.component.html',
  styleUrls: ['./merged-array.component.scss']
})
export class MergedArrayComponent {


  jsonObject1 = {
    "glossary": [
      {
        "name": "A",
        "descriptions": [
          {
            "term": "Ad hoc Arbitration",
            "definition": "UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration."
          },
          {
            "term": "Adjudication",
            "definition": "Adjudication .",
            "example": "Imagine two companies working on a ."
          }
        ]
      },
    ]
  };

  jsonObject2 = {
    "glossary2": [
      {
        "name": "A",
        "descriptions": [
          {
            "term": "Ad hoc Arbitration",
            "definition": "UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration."
          },
          {
            "term": "Adjudication",
            "definition": "Adjudication .",
            "example": "Imagine two companies working on a ."
          }
        ]
      },
    ]
  };

  mergedJSON = this.mergeJSON(this.jsonObject1, this.jsonObject2);

  mergeJSON(obj1: any, obj2: any): any {
    return {
      ...obj1,...obj2,
      
    };
  }


  sortedMergedJSON = this.sortJSON(this.mergedJSON, 'name');

  sortJSON(jsonData: any, sortBy: string): any {
    return {
      ...jsonData,
      glossary: jsonData.glossary.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1)),
      glossary2: jsonData.glossary2.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1)),
    };
  }

}
