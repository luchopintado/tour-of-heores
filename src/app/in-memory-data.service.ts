import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const heroes = [
            { id: 1, name: 'Abaddon' },
            { id: 2, name: 'Alchemist' },
            { id: 3, name: 'Ancient Apparition' },
            { id: 4, name: 'Antimage' },
            { id: 5, name: 'Arc Warden' },
            { id: 6, name: 'Axe' },
            { id: 7, name: 'Bane' },
            { id: 8, name: 'Batrider' },
            { id: 9, name: 'Beast Master' },
            { id: 10, name: 'Bloodseeker' }
        ];

        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0
            ? Math.max(...heroes.map(hero => hero.id)) + 1
            : 1;
    }
}
