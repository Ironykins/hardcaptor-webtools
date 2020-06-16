import { Talent } from "@/models/character-schema";

// Data. List of talents in the game.
export default [
  {
    name: "Binding",
    description: "You may mark 1 Overcharge to bind something in place with magical ropes, chains, glue, or similar. It remains bound until you dispel the effect or lose consciousness. Youma and other strong magical creatures are usually immune to this effect."
  },
  {
    name: "Door",
    description: "For you, doors don’t always lead to what’s on the other side of the door frame. You can mark 1 overcharge to make a door lead to any other door you’ve seen or interacted with."
  },
  {
    name: "Dream Walker",
    description: `
    You can enter and affect the dreams of others, so long as you are within 50 meters of them. When you manipulate another person through their dreams, Roll a test with 3 dice.
    1-3: The person notices you, realizes what has happened, and can either wake up or take back control of the dream
    4-5: The person is unaware of your involvement, and you can twist their dream to show them anything you can imagine.
    6: As above, but they believe the dream is prophetic and has meaning in their everyday life.
    Critical: The person becomes obsessed with the dream, and goes to insane lengths to prove its significance.
    `
  },

  {
    name: "Fly",
    description: "Your magic lets you actually fly; this could be with wings, by magical force, by skating on the air, etc."
  },
  {
    name: "Healing Touch",
    description: "Once per scene, you may mark 1 Overcharge to clear up to 2 harm from yourself or someone else."
  },
  {
    name: "Invisibility",
    description: "You have the power to turn invisible. You can do this effortlessly for a few minutes, or mark 1 overcharge to remain invisible for up to eight hours."
  },
  {
    name: "Magical Pet",
    description: "You have a magical pet, no larger than a wolf. You can decide what it looks like. It is not capable of speech, but it has the intelligence of a fairly smart animal. Ordinary people can’t see it unless you choose to allow them to. It can perform tasks for you."
  },
  {
    name: "Shadow Pluck",
    description: "For you, each person’s shadow contains objects derived from the substance of their soul. You can draw out all manner of amazing and impossible tools from people’s shadows."
  },
  {
    name: "Shapeshift",
    description: "You have both a human form and an animal form, and you can transform between them at will. Your animal form should be no bigger than an elephant, and unable to fly. Otherwise, you can do whatever the animal can."
  },
  {
    name: "Super Strength",
    description: "You can pick up, throw, and carry absurdly heavy things, such as tanker trucks and stone statues."
  },
  {
    name: "Supportive",
    description: "You may spend a downtime action to clear 1 stress or overcharge from an ally."
  },
  {
    name: "Team Mom",
    description: "You may spend a downtime action to grant yourself and each ally +1 die on their next roll to keep up with life."
  },
  {
    name: "Telekinesis",
    description: "You can move some objects with your mind. Your weight limit is around one or two adult humans."
  },
  {
    name: "Telepathy",
    description: "You are capable of two-way communication via thought projection."
  },
  {
    name: "Teleport",
    description: "Teleportation allows you to instantly move from one place to another. You can freely teleport short distances, though this isn’t much faster than walking. You may also mark 1 Overcharge to teleport up to a kilometer away."
  },
  {
    name: "Thrive Under Pressure",
    description: "As long as you have a source of stress, make Keep up with Life rolls with +1 die."
  },
] as Talent[]
