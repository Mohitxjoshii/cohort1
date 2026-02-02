let arr=[1,2,3,4,5]

// map : iterate all value 
let nums = arr.map((val , index , arr)=>{
    return arr[index]=val*2;
    // return val%2==0;
})
console.log(nums)
// console.log(arr)

// filter : 
let ans=arr.filter((value)=>{
    return value%2==0;
})
console.log(ans)

// reduce 
let current=[1,2,3,4]
let sum = current.reduce((acc,value)=>acc+value,10)
console.log(sum)









