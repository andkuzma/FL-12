
function countNumbers(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
          if (typeof count[str[i]] === 'undefined') {
            count[str[i]] = 1;
          } else {
            count[str[i]]++;
          }
      }
  }
  return Object.values(count);
}
countNumbers('erer384jj4444666888jfd123');