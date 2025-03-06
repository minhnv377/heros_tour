import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Pipe } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesDetailComponent } from '../heroes-detail/heroes-detail.component';
import { HeroesService } from '../heroes.service';
import { MessageService } from '../../message/message.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, NgFor, RouterLink, RouterOutlet],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  selectedId: number = 0;

  onSelect(hero: Hero): void {
    this.selectedId = hero.id;
    this.selectedHero = hero;
    this.messageService.addMessage(
      `HeroesComponent: Selected hero id=${hero.id}`
    );
  }
  hero: string = 'Windstorm';

  hero1: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor(
    private heroesService: HeroesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];
