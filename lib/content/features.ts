export type GameFeature = {
  id: string;
  name: string;
  tagline: string;
  description: string;
};

export const gameFeatures: GameFeature[] = [
  {
    id: "wingo",
    name: "Win Go",
    tagline: "Colour prediction, fast rounds",
    description:
      "Pick a colour or number before the timer runs out. Rounds move quickly, so it suits players who like short, simple decisions over long sessions.",
  },
  {
    id: "fived",
    name: "5D",
    tagline: "Five-digit number game",
    description:
      "Choose your own five-digit combination or let the app pick one for you. A slower-paced pick for players who enjoy planning a number strategy.",
  },
  {
    id: "k3",
    name: "K3",
    tagline: "Dice-based outcomes",
    description:
      "Three dice decide every round. Bet on totals, combinations, or single numbers — an easy game to learn in under a minute.",
  },
  {
    id: "lottery",
    name: "Lottery",
    tagline: "Classic draw-style play",
    description:
      "Traditional lottery draws with published results, so you can always check past rounds before deciding how to play the next one.",
  },
  {
    id: "slots",
    name: "Slots",
    tagline: "Spin-and-match reels",
    description:
      "A library of themed slot machines with different reel layouts and jackpot styles, built for quick, casual spins between other games.",
  },
  {
    id: "fishing",
    name: "Fishing",
    tagline: "Arcade-style shooting game",
    description:
      "Aim, shoot, and catch bigger targets for bigger rewards. A more hands-on, skill-flavoured break from the number and card games.",
  },
  {
    id: "rummy",
    name: "Rummy",
    tagline: "Classic card strategy",
    description:
      "The familiar card game of sequences and sets, playable against other users. A good fit if you prefer skill-based table games.",
  },
];
