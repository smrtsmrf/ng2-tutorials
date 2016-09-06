import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    })
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }

  constructor(private heroService: HeroService, 
              private route: ActivatedRoute) {

  }
}