export default function getSVG(name: string) {
  try {
    const file = require(`~/assets/images/${name}.svg?inline`)
    return file.default
  } catch (_e) {
    return null
  }
}
