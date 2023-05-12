function findTheDifference(s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
    result ^= t.charCodeAt(i);
  }
  result ^= t.charCodeAt(t.length - 1);
  return String.fromCharCode(result);
}

console.log(findTheDifference("", "t"))