//两个不定长度的数组，比较其中可能出现大于2的相邻的字符的索引


var arr1=[7,8,9];
var arr2=[2,3,4,5,6,7,8,9];
/*

var result1;
var result2;

function wjh (arr) {
    var result = [];
    for(var i = 0;i<arr.length;i++) {
         if(arr[i] > 2) {
             result.push(i)
        }
    }
    return result;
}

result1 = wjh(arr1);
console.log(result1);

if(result1[1] - result1[0] > 1) {
    console.log(0)
}
if (result1[result1.length -1] - result1[result1.length-2] > 1) {
    console.log(result1.length - 1)
}
for(var i =1;i<result1.length;i++) {
   if((result1[i+1] - result1[i] > 1 && (result1[i] - result1[i-1] > 1))) {
        console.log(i)
    }
}*/

for(var i=0;i<arr1.length;i++) {
    if(arr1[i]>2&&arr1[i+1]>2) {
        console.log(i)
    }
}

for(var i=0;i<arr1.length;i++) {
    if(arr1[i-1]>2&&arr1[i]>2) {
        console.log(i)
    }
}

