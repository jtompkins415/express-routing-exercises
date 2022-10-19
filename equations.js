
function createCounter(arr){
    return arr.reduce((first, next) => {
        first[next] = (first[next] || 0) + 1;
        return first;
    }, {})
}


function findMode(arr){
    let counter = createCounter(arr)

    let count = 0
    let mostFrequent;

    for(let val in counter) {
        if(counter[val] > count){
            mostFrequent = val;
            count = counter[val];
        }
    }

    return +mostFrequent
}


function convertAndValidateNumsArray(numsAsStrings) {
    let arr = []

    for(let i = 0; i < numsAsStrings.length; i++){
        let valToNumber = Number(numsAsStrings[i])

        if(Number.isNaN(valToNumber)) {
            return new Error(`The value of ${numsAsStrings[i]} at index ${i} is not a valid number`)
        }
        arr.push(valToNumber)
    }
    return arr
}

function findMean(nums){
    if (nums.length === 0) return 0;
    return nums.reduce((acc, cur) => {
        return acc + cur
    }) / nums.length
}

function findMedian(nums){
    nums.sort((a,b) => a-b);

    let middleNum = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleNum] + nums[middleNum - 1] / 2);
    } else {
        median = nums[middleNum];
    }
    return median
}

module.exports = {
    createCounter,
    convertAndValidateNumsArray,
    findMean,
    findMedian,
    findMode
};