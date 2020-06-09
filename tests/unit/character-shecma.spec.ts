import { expect } from 'chai'
import {CharacterSheet} from '@/models/character-schema'

describe('Character Sheet', () => {
  it('Computes Attributes', () => {
    const testChar = new CharacterSheet();
    testChar.traits.nerve += 1;
    testChar.traits.imagination += 2;
    testChar.traits.empathy += 3;
    expect(testChar.attributes.passion).to.equal(2)
    expect(testChar.attributes.logic).to.equal(0)
    expect(testChar.attributes.devotion).to.equal(1)
  })
})
