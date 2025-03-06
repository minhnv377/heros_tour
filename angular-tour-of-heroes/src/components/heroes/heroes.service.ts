import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes/heroes.component';
import { Hero } from './hero';
import { MessageService } from '../message/message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroesService: fetched heroes');
    return of(HEROES);
  }
}
