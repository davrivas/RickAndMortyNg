import { Component, OnInit } from '@angular/core';
import { CharacterResult, Info } from './models/character.model';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isBusy = true;
  failedRequest = false;
  errors: any;

  result: CharacterResult;
  characterListInfo: Info;

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters(null).subscribe(result => {
      this.result = result;

      if (!this.characterListInfo) {
        this.characterListInfo = result.info;
      }
      
      this.isBusy = false;
    }, error => {
      this.isBusy = false;
      this.failedRequest = true;
      this.errors = error;
    })
  }
}
