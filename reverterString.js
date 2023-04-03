function reverseString(str) {
  var palavra = ""
  for (var i = str.length - 1; i >= 0; i--) {
    palavra += str[i]
  }
  return palavra
}
console.log(reverseString("Reverter"))
