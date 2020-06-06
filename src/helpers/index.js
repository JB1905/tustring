export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)

  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min. czytania`
  } else {
    return `${new Array(cups || 1)
      .fill("☕️")
      .join("")} ${minutes} min. czytania`
  }
}

export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date
  }

  date = new Date(date)

  const args = [
    lang,
    { day: "numeric", month: "long", year: "numeric" },
  ].filter(Boolean)

  return date.toLocaleDateString(...args)
}