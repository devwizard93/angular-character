export interface Character {
  id?: number;
  name: string;
  characterClass: CharacterClass;
}

export type CharacterClass =
  | 'dark-knight'
  | 'dark-wizard'
  | 'fairy-elf'
  | 'magic-gladiator'
  | 'dark-lord'
  | 'summoner'
  | 'rage-fighter';
