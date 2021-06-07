import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '201700886';
  a = 0;
  b = 0;
  result = 0;
  constructor(private dataService: DataService) { }

  

  mult() {
    this.dataService.sendPostRequest(this.a,this.b).subscribe(
      (data: any)=>{
      this.result = (data.result);
    })
  }
}
