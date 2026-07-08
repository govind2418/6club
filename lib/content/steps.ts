export type Step = {
  title: string;
  description: string;
};

export const registerSteps: Step[] = [
  {
    title: "Open the registration link",
    description:
      "Tap the Register button on this page. It opens the official 6Club registration screen with our invitation code already filled in.",
  },
  {
    title: "Enter your mobile number",
    description:
      "Add a valid mobile number and create a password you'll remember. This becomes your login going forward.",
  },
  {
    title: "Confirm the invitation code",
    description:
      "Check that the invitation code field is filled in — it's applied automatically when you register through this page.",
  },
  {
    title: "Complete your profile",
    description:
      "Finish any remaining verification steps the app asks for, then you're ready to explore Win Go, Lottery, Slots, and the rest.",
  },
];

export const loginSteps: Step[] = [
  {
    title: "Open the login screen",
    description:
      "Tap the Login button on this page to go straight to the official 6Club sign-in screen.",
  },
  {
    title: "Enter your mobile number and password",
    description:
      "Use the same details you created when you registered. Double-check for typos if the app doesn't accept them right away.",
  },
  {
    title: "Forgot your password?",
    description:
      "Use the 'Forgot Password' option on the login screen to reset it through your registered mobile number.",
  },
];

export const installSteps: Step[] = [
  {
    title: "Allow installs from unknown sources",
    description:
      "Since this is an APK and not a Play Store listing, open your phone's Settings, then Security, and enable installs from unknown sources for your browser.",
  },
  {
    title: "Download the APK",
    description:
      "Tap the Download button on this page. You'll be taken to the official 6Club flow where the current APK build is provided.",
  },
  {
    title: "Install and open",
    description:
      "Once the file finishes downloading, open it and follow the on-screen prompts to install. Then launch the app and register or log in.",
  },
];
