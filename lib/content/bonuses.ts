export type Bonus = {
  id: string;
  name: string;
  description: string;
};

export const bonuses: Bonus[] = [
  {
    id: "welcome",
    name: "Welcome Bonus",
    description:
      "New accounts get a starting bonus credit after their first successful registration and deposit, as set by the official app's current promotion.",
  },
  {
    id: "referral",
    name: "Referral Rewards",
    description:
      "Share your own invitation code with friends. When they register and play, you both receive referral credit under the app's referral programme.",
  },
  {
    id: "checkin",
    name: "Daily Check-In",
    description:
      "Open the app and check in each day to build up a small streak bonus. It costs nothing and adds up over a week of regular visits.",
  },
  {
    id: "vip",
    name: "VIP Level Perks",
    description:
      "Regular players move up VIP tiers over time, unlocking better rebate rates and faster withdrawal handling at higher levels.",
  },
];

export const bonusDisclaimer =
  "Exact bonus amounts, wagering conditions, and eligibility are set and updated by the official 6Club app, not by SixClub. Always confirm current terms inside the app before relying on any promotion.";
