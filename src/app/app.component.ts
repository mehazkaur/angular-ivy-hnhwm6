import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataextractService} from './dataextract.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  listofdata:any;
  name = 'Angular ' + VERSION.major;
constructor(private HttpClient:HttpClient,private dataservice:DataextractService)
{

}
ngOnInit()
{
  this.dataservice.fetchData().subscribe(
    (response:any)=>{
      console.log("get data",response);
     this.listofdata=response;
    }
  )
}

}
