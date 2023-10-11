// first question is
// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const AnargramChecker = (strs) => {
  let size = strs.length;
  // using hash map dsa
  let map = new Map();

  // using for loop to iterate the array of strs
  for (let x = 0; x < size; x++) {
    let sortedArray = strs[x].split("").sort().join(""); // this will sort each and every index vaalue of the given array
    // if the sortedArray is already in the map then
    if (map.has(sortedArray)) {
      map.get(sortedArray).push(strs[x]);
    }
    // if not present in the map then
    else {
      map.set(sortedArray, [strs[x]]);
    }
  }
  return map;
};
// creating a function this will check the element in the array is anagram or not
const CheckAnag = (strs, size) => {
  let map = AnargramChecker(strs, size);
  // iterate through the hashmap and print the anagram together
  map.forEach((items) => {
    console.log(items);
  });
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let strs = [""];
// let strs = ["a"];
CheckAnag(strs);
// the time complexity is BigO(n) beacuse i am using map and the space complexity is BigO(1);

// for the second question

// Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.

// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const checkMatchedItems = (s, wordArray) => {
  // i need to check if wordArray is not present or length ===0 then return flase
  if (!wordArray || wordArray.length === 0) {
    return false;
  }
  // otherwise need to check
  // using hashmap  DataStructure to reduce the tiem complexity
  const itemsChecked = new Map();
  wordArray.forEach((item) => {
    itemsChecked.set(item, true); // adding a flag as a key and its value is true at start
  });

  // using while loop to keep the track of the s.length
  while (s.length > 0) {
    let flag = false;
    for (let x = 1; x <= s.length; x++) {
      // need to use substring method to cut letter from the given string
      const element = s.substring(0, x);
      // check if the map contains the word or not
      if (itemsChecked.has(element)) {
        s = s.substring(x);
        flag = true;
        // here we have our element then make the flag to true and break
        break;
      }
    }
    // check if flag=== ture or vice versa then only return false other wise simply execute the if contions
    if (!flag) {
      return false;
    }
  }
  return true;
};
let s = "leetcode";
let wordArray = ["leet", "code"];
// let s = "applepenapple",
//   wordArray = ["apple", "pen"];
// let s = "catsandog",
//   wordArray = ["cats", "dog", "sand", "and", "cat"];
console.log(checkMatchedItems(s, wordArray));

// 3rd question is
// Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// const nums = [10, 2];
const nums = [3, 30, 34, 5, 9];
// simply copy the original array
let DummyArry = [...nums];
// using sort method
DummyArry.sort((a, b) => {
  // so here a and b are the numbers so first need to convert this into the intergers for concatination otherwise it will add all the numbers
  let num1 = a.toString() + b.toString();
  let num2 = b.toString() + a.toString();
  //   console.log(num1, num2);
  // then using sort method functinality to return based on the numbers
  if (num1 > num2) {
    return -1;
  } else if (num1 < num2) {
    return 1;
  }
  // if none of the condtion matches then go for else one
  else {
    return 0;
  }
});

let getresult = DummyArry.join("");
// using the template litrals
let finalOutput = `"${getresult}"`;
console.log(finalOutput);

// 4th question
// Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

// i can solve this question using Selection sort this is not inbuild sorting alorithm
const kthLargestElemet = (arr, position) => {
  // simple using slection sort
  let max;
  for (let x = 0; x < position; x++) {
    // i need to run this loop because i need to find kth largest element it will check until the postion is less than
    max = arr[0];
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] > max) {
        max = arr[y]; // this will return the max element in this array
      }
    }
    // now i need to remove this max element in this array to further go to next max element
    arr = arr.filter((item) => item !== max); // this will modify the array
  }
  return max;
};
let arr = [10, 4, 12, 9, 87, 34];
let position = 2;
console.log(kthLargestElemet(arr, position));
// the time complexity is BigO(n^2*m)  space complexity is BigO(n) becasue i am removing the max element again and again
