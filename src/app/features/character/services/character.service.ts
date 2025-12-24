import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {

  private api = 'http://localhost:8080/characters';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.api);
  }

  create(character: Character): Observable<Character> {
    return this.http.post<Character>(this.api, character);
  }
}

//Puente con el backend