const express = require('express')
const ExpressError = require('./expressError')
const {createCounter ,convertAndValidateNumsArray,findMean,findMedian, findMode} = require('./equations')

const app = express()


app.get('/mean?nums', (req, resp) => {
    if(!resp.query.nums){
        throw new ExpressError('Need to pass an list of numbers to continue', 403)
    }

    let numsAsStrings = resp.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    let result = {
        equation: 'mean',
        result: findMean(nums)
    }

    return resp.send(result)
    
})

app.get('/median?nums', (req, resp) => {
    if(!resp.query.nums){
        throw new ExpressError('Need to pass an list of numbers to continue', 403)
    }

    let numsAsStrings = resp.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    let result = {
        equation: 'median',
        result: findMedian(nums)
    }

    return resp.send(result)
})


app.get('/mode?nums', (req, resp) => {
    if(!resp.query.nums){
        throw new ExpressError('Need to pass an list of numbers to continue', 403)
    }

    let numsAsStrings = resp.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    let result = {
        equation: 'mode',
        result: findMode(nums)
    }

    return resp.send(result)
})


///Global Error

app.use((err, req, res, next) => {
    let status = err.status || 500
    let message = err.message

    return res.status(status).json({
        error: {message, status} 
    })
})


app.listen(3000, () => console.log('Server running on 3000'));