import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlossarydataService {

 


  constructor(private httpClient:HttpClient) { }


  public getGlossaryFromJsonFile(folder: string, file: string) {
    return this.httpClient.get(folder + '/' + file + '.json');
  }

}
