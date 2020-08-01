// Data structures that represent hardcaptor characters
export type Character = {
  /////////////
  // RP Details
  name: string;
  magicMark: string;
  magicWeapon: string;
  magicTheme: string;
  magicCostume: string;
  worldTies: string;

  ////////////////////
  // Mechanical things
  advancements: number;
  archetypeIdx: number;
  talents: number[];
  features: number[];
  abilities: number[];
  traits: {[key: string]: number};
  // More mutable things. Clocks and such.
  hope: number;
  harm: number;
  overcharge: number;
  stress: number;
}

export type Archetype = {
  name: string;
  expTriggers: string[];
  featureList: Feature[];
  // Two categories of abilities.
  abilityTrackNames: string[];
  // First index: Archetype level.
  // Second index: Option number.
  abilityList: Ability[][];
}

export type Talent = {
  name: string;
  description: string;
}

export type Feature = {
  name: string;
  description: string;
}

export type Ability = {
  name: string;
  description: string;
}

/// Logic Goes here.
export function newCharacter(): Character {
  return {
    name: "New Character",
    magicMark: "",
    magicWeapon: "",
    magicTheme: "",
    magicCostume: "",
    worldTies: "",
    advancements: 0,
    archetypeIdx: 0,
    talents: [],
    features: [],
    abilities: [],
    traits: {
      // Passion
      nerve: 0,
      defiance: 0,
      imagination: 0,
      // Logic
      analysis: 0,
      observation: 0,
      subterfuge: 0,
      // Devotion
      adaptability: 0,
      charisma: 0,
      empathy: 0,
    },
    hope: 0,
    harm: 0,
    overcharge: 0,
    stress: 0
  }
}

export function charAttributes(char: Character) {
  return {
    passion: (char.traits.nerve&&1) + (char.traits.defiance&&1) + (char.traits.imagination&&1),
    logic: (char.traits.analysis&&1) + (char.traits.observation&&1) + (char.traits.subterfuge&&1),
    devotion: (char.traits.adaptability&&1) + (char.traits.charisma&&1) + (char.traits.empathy&&1),
  }
}

export function charAvailableTraits(char: Character) {
  return Math.ceil(char.advancements/2)+6;
}

export function charAssignedTraits(char: Character) {
  let assigned = 0;
  Object.keys(char.traits).forEach((traitKey) => {
    assigned += char.traits[traitKey];
  })
  return assigned;
}

export function charAvailableTalents(char: Character) {
  return Math.floor(char.advancements/2)+2;
}

export function charAvailableFeatures(char: Character) {
  const features = Math.floor(char.advancements/2)+1;
  return features > 4 ? 4 : features;
}

export function charAvailableAbilities(char: Character) {
  return Math.ceil(char.advancements/2);
}
