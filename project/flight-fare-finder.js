const timeSortedFlightData = [
  { "flightNo": "AI101", "departTime": "05:30", "origin": "DEL", "destination": "BOM", "price": 4800 },
  { "flightNo": "6E302", "departTime": "06:15", "origin": "DEL", "destination": "BLR", "price": 5100 },
  { "flightNo": "SG119", "departTime": "06:45", "origin": "DEL", "destination": "HYD", "price": 4200 },
  // { "flightNo": "UK850", "departTime": "07:30", "origin": "DEL", "destination": "GOI", "price": 5300 },
  // { "flightNo": "AI205", "departTime": "08:00", "origin": "DEL", "destination": "BOM", "price": 4700 },
  // { "flightNo": "6E601", "departTime": "08:50", "origin": "DEL", "destination": "BLR", "price": 4900 },
  // { "flightNo": "SG300", "departTime": "09:10", "origin": "DEL", "destination": "HYD", "price": 4100 },
  // { "flightNo": "UK902", "departTime": "10:15", "origin": "DEL", "destination": "GOI", "price": 5500 },
  // { "flightNo": "AI990", "departTime": "11:30", "origin": "DEL", "destination": "BOM", "price": 4650 },
  // { "flightNo": "6E909", "departTime": "12:00", "origin": "DEL", "destination": "BLR", "price": 6100 },
  // { "flightNo": "SG502", "departTime": "12:45", "origin": "DEL", "destination": "HYD", "price": 3900 },
  // { "flightNo": "UK703", "departTime": "13:30", "origin": "DEL", "destination": "GOI", "price": 5000 },
  // { "flightNo": "AI302", "departTime": "14:15", "origin": "DEL", "destination": "BOM", "price": 4450 },
  // { "flightNo": "6E104", "departTime": "15:00", "origin": "DEL", "destination": "BLR", "price": 5200 },
  // { "flightNo": "SG210", "departTime": "16:20", "origin": "DEL", "destination": "HYD", "price": 4700 },
  // { "flightNo": "UK812", "departTime": "17:00", "origin": "DEL", "destination": "GOI", "price": 6000 },
  // { "flightNo": "AI808", "departTime": "18:05", "origin": "DEL", "destination": "BOM", "price": 4950 },
  // { "flightNo": "6E606", "departTime": "19:30", "origin": "DEL", "destination": "BLR", "price": 5650 },
  // { "flightNo": "SG400", "departTime": "20:15", "origin": "DEL", "destination": "HYD", "price": 4550 },
  // { "flightNo": "UK999", "departTime": "21:45", "origin": "DEL", "destination": "GOI", "price": 4700 }
]
const priceSortedFlightData = [
  { "flightNo": "SG502", "departTime": "12:45", "origin": "DEL", "destination": "HYD", "price": 3900 },
  { "flightNo": "SG300", "departTime": "09:10", "origin": "DEL", "destination": "HYD", "price": 4100 },
  { "flightNo": "SG119", "departTime": "06:45", "origin": "DEL", "destination": "HYD", "price": 4200 },
  { "flightNo": "AI302", "departTime": "14:15", "origin": "DEL", "destination": "BOM", "price": 4450 },
  { "flightNo": "SG400", "departTime": "20:15", "origin": "DEL", "destination": "HYD", "price": 4550 },
  { "flightNo": "AI990", "departTime": "11:30", "origin": "DEL", "destination": "BOM", "price": 4650 },
  { "flightNo": "AI101", "departTime": "05:30", "origin": "DEL", "destination": "BOM", "price": 4800 },
  { "flightNo": "6E601", "departTime": "08:50", "origin": "DEL", "destination": "BLR", "price": 4900 },
  { "flightNo": "AI808", "departTime": "18:05", "origin": "DEL", "destination": "BOM", "price": 4950 },
  { "flightNo": "UK703", "departTime": "13:30", "origin": "DEL", "destination": "GOI", "price": 5000 },
  { "flightNo": "6E302", "departTime": "06:15", "origin": "DEL", "destination": "BLR", "price": 5100 },
  { "flightNo": "6E104", "departTime": "15:00", "origin": "DEL", "destination": "BLR", "price": 5200 },
  { "flightNo": "UK850", "departTime": "07:30", "origin": "DEL", "destination": "GOI", "price": 5300 },
  { "flightNo": "UK902", "departTime": "10:15", "origin": "DEL", "destination": "GOI", "price": 5500 },
  { "flightNo": "6E606", "departTime": "19:30", "origin": "DEL", "destination": "BLR", "price": 5650 },
  { "flightNo": "UK812", "departTime": "17:00", "origin": "DEL", "destination": "GOI", "price": 6000 },
  { "flightNo": "6E909", "departTime": "12:00", "origin": "DEL", "destination": "BLR", "price": 6100 },
]

// Core Filters
// From → To filter
// Depart After: TimePicker
// Max Budget slider/input
// Sort by Price/Time
// Shuffle to simulate randomness (dev mode only)
//

function convertTimeIntoMinute(time) {
  const [hour, minute] = time.split(":").map(Number);
  return (hour * 60) + minute;
}

// Closest Departure Time
function findClosestTime(flights, inputTime) {

  let low = 0, high = flights.length - 1;
  let targetedMinute = convertTimeIntoMinute(inputTime);

  let closest = flights[0];
  let minDiff = Math.abs(convertTimeIntoMinute(flights[0].departTime, targetedMinute));
  while (low <= high) {

    let mid = Math.floor((low + high) / 2);
    let currentFlight = flights[mid];
    let currentMinute = convertTimeIntoMinute(currentFlight.departTime);
    let currentDiff = Math.abs(currentMinute, targetedMinute);

    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      closest = currentFlight;
    }

    if (currentMinute < targetedMinute) {
      high = mid - 1;
    } else if (currentMinute > targetedMinute) {
      low = mid + 1;
    } else {
      return currentFlight;
    }
  }
  return closest;
}
console.log("findClosestTime ===>", findClosestTime(timeSortedFlightData, "6:15"))

// Best Price Under Budget
// function bestPriceUnderBudget(flights, maxPrice) {
//   let low = 0, high = flights.length - 1;
//   let result = null;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let currentFlight = flights[mid];

//     if (currentFlight.price === maxPrice) return currentFlight;

//     if (currentFlight.price < maxPrice) {
//       result = currentFlight;
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return result;
// }

// console.log("bestPriceUnderBudget ===>", bestPriceUnderBudget(priceSortedFlightData, 5050))
