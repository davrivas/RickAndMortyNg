import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterResult } from '../models/character.model';

@Injectable({providedIn: 'root'})
export class CharacterService {
    private readonly _defaultUrl: string = 'https://rickandmortyapi.com/api/character';

    constructor(private http: HttpClient) { }
    
    getCharacters(url: string) {
        return this.http.get<CharacterResult>(url || this._defaultUrl);
    }
}