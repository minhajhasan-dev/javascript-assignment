// https://github.com/minhajhasan-dev/javascript-assignment

// Problem-01
// kilometerToMeter
function kilometerToMeter(km) {
  var conversion = km * 1000;
  return conversion;
}
var result = kilometerToMeter(5);
console.log(result);

// Problem-02
// budgetCalculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;

  var totalWatchCost = watchQuantity * watchPrice;
  var totalPhoneCost = phoneQuantity * phonePrice;
  var totalLaptopCost = laptopQuantity * laptopPrice;

  var totalCost = totalWatchCost + totalPhoneCost + totalLaptopCost;
  return totalCost;
}
var shoppingCost = budgetCalculator(5, 3, 2);
console.log(shoppingCost);

// Problem-03
// hotelCost
function hotelCost(night) {
  if (night <= 10) {
    var cost = night * 100;
    return cost;
  } else if (night > 10 && night <= 20) {
    var firstTenNightCost = 1000;
    var extraNight = night - 10;
    var extraNightCost = extraNight * 80;
    var totalAmount = firstTenNightCost + extraNightCost;
    return totalAmount;
  } else {
    var firstTwentyNightCost = 1800;
    var nextNights = night - 20;
    var nextNightsCost = nextNights * 50;
    var totalNightCost = firstTwentyNightCost + nextNightsCost;
    return totalNightCost;
  }
}
var result = hotelCost(25);
console.log(result);

// problem-04
// megaFriend
function megaFriend(array) {
  var result = array[0];
  for (var i = 0; i < array.length; i++) {
    var name = array[i];
    if (name.length > result.length) {
      result = name;
    }
  }
  return result;
}
var friendNames = [
  "Minhaj",
  "Konok",
  "Hasib",
  "Nafis",
  "Tahsan",
  "Tamanna",
  "Hurain",
];
var megaResult = megaFriend(friendNames);
console.log(megaResult);
