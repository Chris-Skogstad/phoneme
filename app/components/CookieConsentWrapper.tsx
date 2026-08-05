"use client";

import { useTheme } from "../context/ThemeContext";
import CookieConsent from "./CookieConsent";

export default function CookieConsentWrapper() {
  const { grantConsent } = useTheme();
  return <CookieConsent onAccept={grantConsent} />;
}