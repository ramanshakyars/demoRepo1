import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent {

  @ViewChild('cointainer',{static:false}) el!:ElementRef
  downloadPdf(){
let pdf = new jsPDF();
pdf.html(this.el.nativeElement,{
  callback: (pdf)=>
  pdf.save("sampledata")
})
  }
}
