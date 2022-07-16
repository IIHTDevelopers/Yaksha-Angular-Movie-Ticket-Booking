import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  host:string = " http://localhost:6565/movies";

  constructor(private http:HttpClient) { }

  getAllMovies(){
    return this.http.get(this.host);
  }
}
