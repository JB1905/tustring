export const formatReadingTime = (minutes: number) => {
  const cups = Math.round(minutes / 5)

  let icons

  if (cups > 5) {
    icons = new Array(Math.round(cups / Math.E)).fill('🍱')
  } else {
    icons = new Array(cups || 1).fill('☕️')
  }

  return `${icons.join('')} ${minutes} min. czytania`
}

export const formatPostDate = (date: Date, lang: string) => {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  return date.toLocaleDateString(lang, options)
}
