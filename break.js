/* for (var i = 0; i<= 20; i++){
   console.log(i);
   if (i > 10) {
         break;
   }
} */

/* var rostGiven = 0;
while (rostGiven < 10) {
  console.log(`Rost den, gift item anci...`);
   rostGiven++;
   if (rostGiven > 4) {
         break;
   }
}
 */

/* var items = [`bottle`, `mouse`, `sunglass`, `pen`, `notebook`];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == `pen`) {
    break;
  }
  console.log(item);
} */

// Target: Display every element of an array using for loop.

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
