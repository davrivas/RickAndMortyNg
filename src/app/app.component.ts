import { Component, OnInit } from '@angular/core';
import { CharacterResult } from './models/character.model';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characterResult: CharacterResult;

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters(null).subscribe(result => {
      this.characterResult = result;
    }, error => {
      alert(JSON.stringify(error));
    })
  }
}
