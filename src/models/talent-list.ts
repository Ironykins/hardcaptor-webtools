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
] as Talent[]
