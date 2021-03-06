import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://34.68.19.11:3000";
  constructor(private httpClient: HttpClient) { }
  
  public sendPostRequest(a:number,b:number){
    return this.httpClient.post(this.REST_API_SERVER,{a:a,b:b});
  }
}
