export const FormatText = (text: string, maxLenght: number) => {
  if (text.length > maxLenght) {
    return `${text.substring(0, maxLenght)}...`
  } else {
    return text
  }
}