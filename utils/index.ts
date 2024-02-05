export function removeWhiteSpaceAndSpecialCharacters(target: string) {
  return target.replace(/[^A-z\d][\\\^]?/g, "");
}
export function removeSpecialCharacters(target: string) {
  return target.replace(/[^A-z\s\d][\\\^]?/g, "");
}
