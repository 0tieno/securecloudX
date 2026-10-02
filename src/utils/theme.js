export function getInitialTheme() {
  return localStorage.getItem("scx-theme") === "dark" ? "dark" : "light";
}
