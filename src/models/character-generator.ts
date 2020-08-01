import { Character, newCharacter, charAvailableTalents, charAvailableTraits, charAvailableFeatures, charAvailableAbilities } from '@/models/character-schema';
import { ExampleThemes, ExampleWeapons, ExampleMagicalMark, ExampleCostume, FamilyNames, GivenNames } from '@/models/rp-example-details';
import ArchetypeList from '@/models/archetype-list';
import talentList from '@/models/talent-list';

export default function getRandomCharacter(advancements = 0): Character {
  const character = newCharacter();
  character.name = GivenNames[Math.floor((Math.random() * GivenNames.length))]
    + " " + FamilyNames[Math.floor((Math.random() * FamilyNames.length))];
  character.advancements = advancements;
  
  // RP Details
  character.magicTheme = ExampleThemes[Math.floor((Math.random() * ExampleThemes.length))];
  character.magicCostume = ExampleCostume[Math.floor((Math.random() * ExampleCostume.length))];
  character.magicWeapon = ExampleWeapons[Math.floor((Math.random() * ExampleWeapons.length))];
  character.magicMark = ExampleMagicalMark[Math.floor((Math.random() * ExampleMagicalMark.length))];

  // Archetype
  character.archetypeIdx = Math.floor((Math.random() * ArchetypeList.length))
  const archetype = ArchetypeList[character.archetypeIdx];

  // Randomly assign Traits
  for(let i = 0; i < charAvailableTraits(character); i++) {
    // For each trait point, find a random legal place to put it, and put it there.
    const elligibleTraits = Object.keys(character.traits).filter(x=>character.traits[x] < 3)
    character.traits[elligibleTraits[Math.floor((Math.random() * elligibleTraits.length))]]++;
  }

  // Randomly get talents.
  for(let i = 0; i < charAvailableTalents(character) && character.talents.length < talentList.length; i++) {
    // Get a random talent index number.
    let randomTalentIndex = Math.floor((Math.random() * talentList.length));
    // If we already have it, pick the next one. No infinite loops thanks to extra condition on for loop.
    while(character.talents.indexOf(randomTalentIndex) !== -1) {
      randomTalentIndex = (randomTalentIndex + 1) % talentList.length;
    }
    
    character.talents.push(randomTalentIndex);
  }

  // Randomly get Archetype Features
  for(let i = 0; i < charAvailableFeatures(character) && character.features.length < archetype.featureList.length; i++) {
    // Get a random feature index number.
    let randomFeatureIndex = Math.floor((Math.random() * archetype.featureList.length));
    // If we already have it, pick the next one. No infinite loops thanks to extra condition on for loop.
    while(character.features.indexOf(randomFeatureIndex) !== -1) {
      randomFeatureIndex = (randomFeatureIndex + 1) % archetype.featureList.length;
    }
    
    character.features.push(randomFeatureIndex);
  }

  // Randomly get abilities
  for(let i = 0; i < charAvailableAbilities(character); i++) { 
    character.abilities.push(Math.floor((Math.random() * 2)));
  }
  
  return character;
}