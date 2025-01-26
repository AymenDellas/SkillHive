var isPalindrome = function (x) {
  const converted = String(x);
  const arr = converted.split("");

  if (arr[0] == arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
