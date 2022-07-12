import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataextractService {

  constructor(private HttpClient:HttpClient)
  {
  
  }

    // method to fetch data from server
    public fetchData(): any {
    return this.HttpClient.get("https://swapi.dev/api/people");
       // logic to fetch data
    }

}