import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './services/character.service';
import { Character, CharacterClass } from './models/character.model';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];
  errorMessage: string = '';


  newCharacter: Character = {
    name: '',
    characterClass: 'dark-knight'
  };


  classes: { label: string; value: CharacterClass }[] = [
    { label: 'Dark Knight', value: 'dark-knight' },
    { label: 'Dark Wizard', value: 'dark-wizard' },
    { label: 'Fairy Elf', value: 'fairy-elf' },
    { label: 'Magic Gladiator', value: 'magic-gladiator' },
    { label: 'Dark Lord', value: 'dark-lord' },
    { label: 'Summoner', value: 'summoner' },
    { label: 'Rage Fighter', value: 'rage-fighter' }
  ];

  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe(r => this.characters = r);
  }

  save(): void {
  this.service.create(this.newCharacter).subscribe({
    next: () => {
      // Éxito
      this.load();
      this.newCharacter = { name: '', characterClass: 'dark-knight' };
      this.errorMessage = ''; // Limpiar mensaje de error
    },
    error: (err) => {
      // Verificar si es un error 400
      if (err.status === 400) {
        // Capturar mensaje enviado desde el backend
        this.errorMessage = err.error?.message || 'Error de validación';
      } else {
        // Otros errores
        this.errorMessage = 'Ocurrió un error inesperado';
      }
    }
  });
}



  characterImages: Record<CharacterClass, string> = {
    'dark-knight': 'dark-knight.jpeg',
    'dark-wizard': 'dark-wizard.jpeg',
    'fairy-elf': 'fairy-elf.jpeg',
    'magic-gladiator': 'magic-gladiator.jpeg',
    'dark-lord': 'dark-lord.jpg',
    'summoner': 'summoner.jpg',
    'rage-fighter': 'rage-fighter.jpg'
  };

  get characterImage(): string {
    return `assets/characters/${this.characterImages[this.newCharacter.characterClass]}`;
  }

}
//Controla la vista y la logica de la UI