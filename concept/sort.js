let arr = [10, 5, 2, 4, 1]
let n = arr.length;

// ===>>=== SELECTION SORT ===<<=== //
// WORST CASE :: BIG O(n^2)
// BEST CASE :: BIG O(n)
// for (let i = 0; i < n - 1; i++) {
//   let min = i;
//   let didSwap = false;
//   for (let j = i + 1; j < n; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//       let tamp = arr[min];
//       arr[min] = arr[i];
//       arr[i] = tamp;
//       didSwap = true;
//     }
//   }
//   if (!didSwap) break;
// }
// console.log(arr);


// WORST CASE :: BIG O(n^2)
// BEST CASE :: BIG O(n)
// for(let j=arr.length-1; j>=0; j--){
//   let didSwap = false;
//     for(let i=0; i<=j-1; i++){
//         if(arr[i] > arr[i+1]){
//             let curr = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = curr;
//             didSwap = true;
//         }
//     }
//     if(didSwap == false) break;
// }
// console.log(arr);

// ===>>=== RECURSIVE BUBBLE SORT ===<<=== //
function recursiveBubbleSort(arr, n) {
  console.log("👀 ⇒ recursiveBubbleSort ⇒ arr:", arr)
  if (n == 1) return;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let curr = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = curr;
      count++;
    }
  }
  if (count == 0) return;
  recursiveBubbleSort(arr, n - 1)
}
recursiveBubbleSort(arr, arr.length);

console.log("👀 ⇒ arr:", arr);
// ===>>=== MERGE SORT ===<<=== //
// function mergeSort(arr, low, high) {
//   console.log("mergeSort ===>>", arr[low], arr[high]);
//   if (low == high) return;
//   const mid = Math.floor((low + high) / 2);
//   mergeSort(arr, low, mid); // LEFT DIVISION
//   mergeSort(arr, mid + 1, high); // RIGHT DIVISION
//   soft(arr, low, mid, high); // MERGE
// }
// function soft(arr, low, mid, high) {
//   let left = low
//   let right = mid + 1
//   let temp = []
//   while (left <= mid && right <= high) {
//     console.log("👀 ⇒ soft ⇒ arr[left] <= arr[right]:", arr[left], arr[right])
//     if (arr[left] <= arr[right]) {
//       temp.push(arr[left])
//       left++;
//     } else {
//       temp.push(arr[right])
//       right++;
//     }
//   }
//   while (left <= mid) {
//     temp.push(arr[left])
//     left++;
//   }
//   while (right <= high) {
//     temp.push(arr[right])
//     right++;
//   }
//   for (let i = low; i <= high; i++) {
//     arr[i] = temp[i - low]
//   }
// }
// mergeSort(arr, 0, n - 1);

// ===>>=== QUICK SORT ===<<=== //
// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pivot = findPivot(arr, low, high);
//     console.log("👀 ⇒ quickSort ⇒ pivot:", arr[pivot])
//     quickSort(arr, low, pivot - 1);
//     quickSort(arr, pivot + 1, high);
//   }
// }
// function findPivot(arr, low, high) {
//   console.log("👀 ⇒ findPivot ⇒ arr, low, high:", arr, low, high)
//   let pivot = arr[low];
//   let i = low;
//   let j = high;
//   while (i < j) {
//     while (arr[i] <= pivot && i <= high - 1) {
//       i++;
//     }
//     while (arr[j] > pivot && j >= low + 1) {
//       j--;
//     }
//     swap(arr[i], arr[j]);
//     return j;
//   }
// }
// function swap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }
// quickSort(arr, 0, n - 1);