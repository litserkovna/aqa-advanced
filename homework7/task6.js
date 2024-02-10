const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedList = numbersList.slice();
const sortedList = copiedList.sort((a, b) => a - b);
console.log("Original list:", numbersList, "Sorted list:", sortedList)