function darkenHexColor (hex: string, factor: number) {
  // Remove the "#" if present
  hex = hex.replace("#", "");

  // Convert to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Apply darkening factor
  r = Math.max(0, Math.floor(r * factor));
  g = Math.max(0, Math.floor(g * factor));
  b = Math.max(0, Math.floor(b * factor));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export const timeAgo = (timestamp: Date) => {
  let value: string;
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat("en", {numeric: "auto"});

  if(years > 0) {
    value = rtf.format(0 - years, "year");
  } else if(months > 0) {
    value = rtf.format(0 - months, "month");
  } else if(days > 0) {
    value = rtf.format(0 - days, "day");
  } else if(hours > 0) {
    value = rtf.format(0 - hours, "hour");
  } else if(minutes > 0) {
    value = rtf.format(0 - minutes, "minute");
  } else {
    // value = rtf.format(0 - diff, "second");
    value = 'Now'
  }
  return value;
};

export function dashToCamelCase (str: string) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

export function dashToSentenceCase (input: string): string {
  return input
    .toLowerCase() // Convert all characters to lowercase
    .replace(/-/g, ' ') // Replace dashes with spaces
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
}

export const isArrayArray = (x: string[] | string[][]): x is string[][] => Array.isArray(x[0])

export function matchSubString (target: string, searchValue: string) {
  return target.toLowerCase().includes(searchValue.toLowerCase())
} 

export default {
  darkenHexColor,
  timeAgo, 
  dashToCamelCase,
  isArrayArray,
  dashToSentenceCase,
  matchSubString
}