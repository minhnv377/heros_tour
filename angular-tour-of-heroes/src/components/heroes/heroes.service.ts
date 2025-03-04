import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes/heroes.component';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
