function isSameType(value1, value2) {
  // Convert strings that can be numbers to actual numbers
  const numValue1 = isNaN(value1) ? value1 : Number(value1);
  const numValue2 = isNaN(value2) ? value2 : Number(value2);

  if (isNaN(numValue1) && isNaN(numValue2)) {
    return true;
  }

  return typeof numValue1 === typeof numValue2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
