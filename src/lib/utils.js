const audio = new Audio('/static/new-message.mp3')

export const playSound = () => {
  audio.play()
}

export const generateEmojis = () => {
  let result = []
  for (let codePoint = 128513; codePoint < 128591; codePoint++) {
    result.push(String.fromCodePoint(codePoint))
  }
  return result
}
