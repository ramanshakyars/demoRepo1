import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OprationsService {
  constructor() {}

  dosum(firstNumber: number, secondNumber: number) {
    const answer = firstNumber + secondNumber;
    return answer;
  }

  itrateArray(element: any) {
     element.filter((res: any) => {
      const elementsAfteritrate = res;
    });
    return ;
  }
}
