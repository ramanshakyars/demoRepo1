import { Component } from '@angular/core';
import { OprationsService } from '../oprations.service';

@Component({
  selector: 'app-practice-concepts',
  templateUrl: './practice-concepts.component.html',
  styleUrls: ['./practice-concepts.component.scss']
})
export class PracticeConceptsComponent {
  student=[1,2,3]
constructor(private oprationService:OprationsService){
this.getSum();
}

getSum(){
 const solution = this.oprationService.dosum(2,2)
  console.log(solution);
  const elements = this.oprationService.itrateArray(this.student);
  console.log(elements);
}


}
