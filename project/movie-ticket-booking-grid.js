let rows = 3;
let cols = 5;
let theater = Array.from({ length: rows }, () => Array(cols).fill("🟢"))
console.log("👀 ⇒ theater:", theater)

function seatBooks(r, c) {
  if (theater[r][c]) {
    if (theater[r][c] === "🟢") {
      theater[r][c] = "🔴";
      console.log("Your desired seat it booked 🍿");
    } else {
      console.error("Seat it already booked by someone same as you !!");
    }
  }
}
function cancelBooking(r, c) {
  if (theater[r][c]) {
    if (theater[r][c] === "🔴") {
      theater[r][c] = "🟢";
      console.log("Your booked seat is cancel, don't come again");
    } else {
      console.error("Seat it already cancel go back");
    }
  }
}
seatBooks(0, 1)
seatBooks(0, 3)
seatBooks(2, 1)

console.log("👀 ⇒ theater:", theater)
// cancelBooking(1, 1)
// cancelBooking(1, 1)
// console.log("👀 ⇒ theater:", theater)

function groupBooking(seat) {
  let rowWiseAvailableSeat = {};
  for (let row = 0; row < rows; row++) {
    let count = 0;
    for (let col = 0; col < cols; col++) {
      if (theater[row][col] === "🟢") {
        count++;
        if (count === seat) {
          rowWiseAvailableSeat[row] = `From ${col + 1 - seat} to ${col}`;
          break;
        }
      } else {
        count = 0;
      }
    }
  }
  return rowWiseAvailableSeat;
}
console.log("👀 ⇒ groupBooking(3):", groupBooking(3))
