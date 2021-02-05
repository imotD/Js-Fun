var s = "";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j >= i) {
      s += "";
    } else {
      s += "*";
    }
  }
  s += "\n";
}
console.log(s);
// fail

// *****
//  ****
//   ***
//    **
//     *
