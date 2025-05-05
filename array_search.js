let arr=[10,20,30,40,50,60,70]
let el=30;
let index=undefined
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]===el)
    {
        index=i
    }
}
 console.log(index)
 arr.splice(2,1);
 console.log(arr);
 console.log(arr.indexOf(el));


