const { hasUncaughtExceptionCaptureCallback } = require('process')
const {createCounter ,convertAndValidateNumsArray,findMean,findMedian, findMode} = require('./equations')

test('should return mean', () => {
    let mean = findMean([3,6,7,8]);
    expect(mean).toEqual(6);
});

test('should return median', () => {
    let median = findMedian([1,4,5,6,7]);
    expect(median).toEqual(5);
});

test('should return mode', () => {
    let mode = findMode([1,3,4,4,5,6]);
    expect(mode).toEqual(4);
});