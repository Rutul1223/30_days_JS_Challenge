/* Activity -> 1 : Two Sum */

// Task_1 - Solve the "Two Sum" Problem on LeetCode.
//      -> Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//      -> Log the indices for a few test cases.

const twoSum = (nums, target) => {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }

    // If no solution found, return an empty array (as per LeetCode, there is always one solution)
    return [];
};

// Test cases
const testCases = [{
        nums: [2, 7, 11, 15],
        target: 9
    },
    {
        nums: [3, 2, 4],
        target: 6
    },
    {
        nums: [3, 3],
        target: 6
    },
    {
        nums: [1, 5, 3, 7],
        target: 8
    },
];

testCases.forEach((testCase, index) => {
    const {
        nums,
        target
    } = testCase;
    const result = twoSum(nums, target);
    console.log(`Test Case ${index + 1}:`, result);
});

// Test Case 1: [ 0, 1 ]
// Test Case 2: [ 1, 2 ]
// Test Case 3: [ 0, 1 ]
// Test Case 4: [ 1, 2 ]

/* Activity -> 2 : Reverse Integer */

// Task_2 - Solve the "Reverse Integer" Problem on LeetCode.
//      -> Write a function that takes an integer and returns it with its digits reversed.
//      -> Handle edge cases like negative numbers and numbers ending in zero.
//      -> Log the reversed integers for a few test cases.

const reverseInteger = (x) => {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''),10);

    if(reversed > 2**31 -1){
        return 0;
    }
    return isNegative ? -reversed : reversed;
};
const testCases1 = [
    123,
    -123,
    120,
    0,
    1563245615,
];
testCases1.forEach((testCase,index)=>{
    const result = reverseInteger(testCase);
    console.log(`Test Case ${index+1}:`,result);
});

/* Activity -> 3 : Palindrome Number */

// Task_3 - Solve the "Palindrome Number" Problem on LeetCode.
//      -> Write a function that takes an integer and returns true if it is a palindrome ans false otherwise.
//      -> Log the result for a few test cases, including edge cases like negative numbers.

const isPalindrome = (x) => {
    if(x<0){
        return false;
    }
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
};
const testCases2 = [
    121,
    -121,
    10,
    0,
    1221,
];
testCases2.forEach((testCase,index)=>{
    const result = isPalindrome(testCase);
    console.log(`Test Case ${index+1}:`,result);
});

/* Activity -> 4 : Merge Two Sorted Lists */

// Task_4 - Solve the "Merge Two Sorted Lists" Problem on LeetCode.
//      -> Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//      -> Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    let dummy = new ListNode();
    let current = dummy;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
};

// Helper function to print a linked list
const printLinkedList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

// Test cases
const testCases3 = [
    {
        list1: createLinkedList([1, 2, 4]),
        list2: createLinkedList([1, 3, 4])
    },
    {
        list1: createLinkedList([2, 3, 7]),
        list2: createLinkedList([1, 5, 6])
    },
    {
        list1: createLinkedList([]),
        list2: createLinkedList([0])
    }
];

testCases3.forEach((testCase, index) => {
    const { list1, list2 } = testCase;
    const mergedList = mergeTwoLists(list1, list2);
    console.log(`Test Case ${index + 1}:`);
    printLinkedList(mergedList);
});

/* Activity -> 5 : Valid Parentheses */

// Task_5 - Solve the "Valid Parentheses" Problem on LeetCode.
//      -> Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
//      -> A string is valid if open brackets are closed in the correct order.
//      -> Log the result for a few test cases.

const isValid = (s) => {
    const stack = [];
    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Test cases
const testCases4 = [
    "()",       // Expected output: true
    "()[]{}",   // Expected output: true
    "(]",       // Expected output: false
    "([)]",     // Expected output: false
    "{[]}",     // Expected output: true
    "",         // Expected output: true
];

testCases4.forEach((testCase, index) => {
    const result = isValid(testCase);
    console.log(`Test Case ${index + 1}:`, result);
});
