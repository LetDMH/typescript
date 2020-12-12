type Poker = {
  color: color
  number: number
}
type color = '♠' | '♥' | '♣' | '♦'
function createPoker(): Poker[] {
  const pokers: Poker[] = []
  for (let i = 1; i <= 13; i++) {
    pokers.push({
      color: '♠',
      number: i
    })
    pokers.push({
      color: '♣',
      number: i
    })
    pokers.push({
      color: '♥',
      number: i
    })
    pokers.push({
      color: '♦',
      number: i
    })
  }
  return pokers
}
function printer(pokers: Poker[]) {
  pokers.forEach((item) => {
    if (item.number <= 10) {
      console.log(`${item.color}${item.number}`)
    } else if (item.number === 11) {
      console.log(`${item.color}J`)
    } else if (item.number === 12) {
      console.log(`${item.color}Q`)
    } else {
      console.log(`${item.color}K`)
    }
  })
}
printer(createPoker())
