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
    const hero = HEROES.find((hero)=> hero.id===id)!;
     return of(hero)

  }
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroesService: fetched heroes');
    return of(HEROES);
  }
}
