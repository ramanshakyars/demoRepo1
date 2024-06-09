import { Component, OnInit } from '@angular/core';
import { GlossarydataService } from 'src/app/services/glossarydata.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  data!: any;
  filteredGlossary:any = [];
 
  constructor(private glossaryservice: GlossarydataService) {
    this.getdatafromJson();
  }
  ngOnInit() {
  
  }

  newData: any;
  getdatafromJson() {
    this.glossaryservice
      .getGlossaryFromJsonFile('assets/JSON', 'data')
      .subscribe((result: any) => {
        this.data = this.filteredGlossary= result.glossary;
        
        console.log(this.data);
      });
  }
  glossaryGroupNameGenrator(val:string){
    return `glossery-group-${val}`;

  }

}
