"use client";

import { useTheme } from "../context/ThemeContext";
import PageHeading from "../components/PageHeading";
import Toggle from "../components/Toggle";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex flex-col items-center py-10 px-4 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <PageHeading
        title="Settings"
        description="Customize your experience with the phoneme activity builder."
      />

   <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm transition-colors">
  <Toggle
    checked={theme === "dark"}
    onChange={toggleTheme}
    label={theme === "dark" ? "Dark Mode" : "Light Mode"}
  />
</div>
    </main>
  );
}