// Data structures that represent hardcaptor characters

export class CharacterSheet {
    /////////////
    // RP Details
    name = "";
    magicMark = "";
    magicWeapon = "";
    magicTheme = "";
    magicCostume = "";
    worldTies = "";

    ////////////////////
    // Mechanical things
    advancements = 0;

    // Reference archetype by index in global archetype list.
    archetypeIdx = 0;

    // Reference a talent by index of global talents list.
    talents: number[] = [];

    // Reference a feature by index of archetype features list.
    features: number[] = [];

    // Index is your archetype level. 
    // Value is 0 for first option, 1 for second.
    abilities: number[] = [];

    traits: {[key: string]: number} = {
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
    };

    get attributes() {
      return {
        passion: (this.traits.nerve&&1) + (this.traits.defiance&&1) + (this.traits.imagination&&1),
        logic: (this.traits.analysis&&1) + (this.traits.observation&&1) + (this.traits.subterfuge&&1),
        devotion: (this.traits.adaptability&&1) + (this.traits.charisma&&1) + (this.traits.empathy&&1),
      }
    }

    // Get total Number of Trait Points available at your advancement level.
    get availableTraits(): number {
      return Math.ceil(this.advancements/2)+6;
    }

    // Total number of talents available at your advancement level.
    get availableTalents(): number {
      return Math.floor(this.advancements/2)+2;
    }

    // Total number of features available at your advancement level.
    get availableFeatures(): number {
      const features = Math.floor(this.advancements/2)+1;
      return features > 4 ? 4 : features;
    }

    // Total number of archetype abilities available at your advancement level.
    get availableAbilities(): number {
      return Math.ceil(this.advancements/2);
    }

    // More mutable things. Clocks and such.
    hope = 0;
    harm = 0;
    overcharge = 0;
    stress = 0;
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