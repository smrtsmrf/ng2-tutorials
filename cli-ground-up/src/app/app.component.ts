import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app component works!';
  artist = '';
  retrievedData: any[] = []
  url:string = 'https://api.spotify.com/v1/search/?type=artist&q=';

  constructor(private musicService:MusicService) { }

  getData(search) {
  	this.musicService.getArtist(search)
  		.subscribe(data => {
  			this.retrievedData = data;
                  this.artist = '';  		
            })
  }

  ngOnInit():void {
    this.musicService.hitServer()
      .subscribe(data => {
        console.log(data)
        this.title = data._body
      })
  }
}
