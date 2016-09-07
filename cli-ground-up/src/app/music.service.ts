import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MusicService {

  constructor(private http:Http) { }

  url:string = 'https://api.spotify.com/v1/search/?type=artist&q=';

  getArtist(searchTerm):Observable<any> {
   return this.http.get(`${this.url}${encodeURI(searchTerm)}`)
  		.map(res => res.json().artists.items)
 }

 hitServer():Observable<any> {
   return this.http.get('http://localhost:3000/api')
     // .map(res => res)
   }
}