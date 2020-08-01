import { expect } from 'chai'
import {newCharacter, charAttributes} from '@/models/character-schema'

describe('Character Sheet', () => {
  it('Computes Attributes', () => {
    const testChar = newCharacter();
    testChar.traits.nerve += 1;
    testChar.traits.imagination += 2;
    testChar.traits.empathy += 3;
    let attributes = charAttributes(testChar)
    expect(attributes.passion).to.equal(2)
    expect(attributes.logic).to.equal(0)
    expect(attributes.devotion).to.equal(1)
  })
})
