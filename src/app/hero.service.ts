import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: Fetched Heroes`);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    //Error Handling Assumed
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Fetched Hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
