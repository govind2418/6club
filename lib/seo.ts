export const siteConfig = {
  name: "SixClub",
  url: "https://sixclub.in",
  title: "6Club Game | SixClub — Login, Register & APK Download Guide",
  description:
    "SixClub is a free guide to the 6Club game app: how to register, log in, download the latest APK, and understand every bonus. Simple steps, no confusion.",
  keywords: [
    "6Club",
    "6 Club",
    "6Club Game",
    "6Club Login",
    "6Club Register",
    "6Club APK",
    "6Club Download",
    "SixClub",
  ],
  locale: "en_IN",
  googleSiteVerification: "GMVDTfszDaphte2ZTJBWuQooPgiHJsJh3GSJd74lxy0",
};

/**
 * 6Club delivers its APK only after the register/login flow (confirmed by
 * inspecting the app's public bundle — there is no standalone public APK
 * file). Both the Hero and APK Download CTAs route through this one link.
 * Swap this constant if a direct APK URL becomes available.
 */
export const REGISTER_URL =
  "https://6clubl.com/#/register?invitationCode=642855552519";
export const LOGIN_URL = REGISTER_URL;
export const APK_DOWNLOAD_URL = REGISTER_URL;

export const APP_VERSION = "v3.8.2";
export const APP_UPDATED = "2026-07-01";
export const APP_SIZE = "38 MB";
export const APP_MIN_ANDROID = "Android 6.0+";
