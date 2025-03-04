import { HeroesService } from './../heroes.service';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-heroes-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './heroes-detail.component.html',
  styleUrl: './heroes-detail.component.scss',
})
export class HeroesDetailComponent {
  // @Input() hero?: Hero;

  hero!: Hero;
  ngOnInit(): void {}
  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroesService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
}
