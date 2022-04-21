'use strict'

function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  //let args = Array.prototype.push.apply(arguments);
  console.log(args)
  return args.join(separator);
}

let out = myConcat("+",'a','b','c','d' )
console.log(out)

function list() {
  console.log(typeof arguments )
  return Array.prototype.slice.call(arguments)
  
  //return arguments.slice()
}

let list1 = list(1, 2, 3) // [1, 2, 3]
console.log(list1)

let arr1 = ['a','s','f']
let arr2 = [1,2,3,4]
//arr1.push.apply(arr1,arr2)
arr1.push.apply(arr1,arr2)
console.log("arr1>>>", arr1)
let arr3 = ['a','s','f']
let arr4 = [1,2,3,4]
arr3.push.call(arr3,arr4.slice(1))
console.log("arr3>>>", arr3)
