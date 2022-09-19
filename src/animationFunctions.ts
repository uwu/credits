export const generateRandomHex = (length: number) =>
  Math.round(Math.random() * 16 ** length).toString(16);

export const replaceTextWithSpaces = (str: string, chance: number) =>
  Array.from(str)
    .map((c) => (Math.random() * 100 < chance ? " " : c))
    .join("");

export function renderWeather(
  c,
  layer,
  x,
  y,
  weather,
  mutationAfter = 0,
  spcChance = 0
) {
  //TODO
}

export function noise(c, layer, amount, chars, colours) {
  //TODO
}

export function setMultilineString(c, layer, x, y, string, col) {
  //TODO
}

export function typeText(c, generator, layer, x, y, col, render = true) {
  //TODO
}

const fucks = [..."...  `=/?-$%"];

export function fuckUpText(str: string, chance: number, alsoIgnore = "") {
  const toIgnore = [..."@~\n", ...alsoIgnore];

  return [...str]
    .map((c) =>
      c == "\n" || Math.random() * 1000 >= chance || toIgnore.includes(c)
        ? c
        : fucks[Math.round(Math.random() * fucks.length)]
    )
    .join("");
}

export function debugInfo(c, g, b, frames) {
  //TODO
}

export const clear = (c, layer) => {
  //TODO
};

export function beatToggle(c, g, layer, x, x2, y, y2, char, col) {
  //TODO
}

export function workOutDate(b: number, dayOffset = 0) {
  // 22.10.2009
  const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // one day per 64 beats
  let daysNeeded = Math.floor(b / 64) + dayOffset;

  let monthLoc = 9,
    dayLoc = 22,
    year = 2009;

  while (daysNeeded > 0) {
    const leapYear = year % 4 == 0 && monthLoc == 1 ? 1 : 0;
    const untilEndMonth = monthLengths[monthLoc] + 1 - dayLoc + leapYear;
    dayLoc += Math.min(daysNeeded, untilEndMonth);
    daysNeeded -= Math.min(daysNeeded, untilEndMonth);

    if (dayLoc > monthLengths[monthLoc] + leapYear) {
      monthLoc++;
      dayLoc++;
      if (monthLoc >= 12) {
        monthLoc = 0;
        year++;
      }
    }
  }

  const pad = (x: number, n: number) => x.toString().padStart(n, "0");

  return `${pad(dayLoc, 2)}.${pad(monthLoc, 2)}.${pad(year, 4)}`;
}

export const splitWordTemplate = (s: string) =>
  s.split("\n").map((s) => s.split("#"));

export function typewriteByWord(c, generator, layer, x, y, col, render = true, historyVar = "history") {
  //TODO
}

export function writeHistory(c, generator, layer, x, y, col, stop, var_ = "history") {
  //TODO
}

export function showAccessPointVisual(c, generator, layer, x, y) {
  //TODO
}

export function makePoweroffBars(c, b, layer, col) {
  //TODO
}