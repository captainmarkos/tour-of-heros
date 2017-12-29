import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    /* NOTE: The of(HEROES) returns an Observable<Hero[]>
       that emits a single value, the array of mock heroes. */
    return of(HEROES);
  }
}

