import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../shared/hero';

@Injectable()
export class HeroSearchService {
	
	search(term: string): Observable<Hero[]> {
		return this.http.get(`app/heroes?name=${term}`)
			.map((r: Response) => r.json().data as Hero[]);
	}

	constructor(private http: Http) {
			
	}
}