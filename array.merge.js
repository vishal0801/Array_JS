let data1 =[5,10,15,20,25,30,35]
let data2 =[100,110,120,130,140]
let data3=[]

for(let i=0;i<data1.length;i++){
    data3[i]=data1[i]
}
for(let i=0;i<data2.length;i++){
data3[data1.length+i]=data2[i]   
}
// console.log(data3);

let dummy1=[1,2,3,4,5,6,7]
let reverse=dummy1.reverse()
console.log(reverse);
let dummy2=[10,20,30,40,50,60]
let dummy3=[...dummy1,...dummy2]
console.log(dummy3);
