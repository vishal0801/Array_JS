let money=100
let TotalApple=0
function buyApple(x){
if(x>0){ 
    console.log("i have money",x,"TotalApple is",TotalApple);
    buymore(x)
}
else{
    console.log("no money, total apple is",TotalApple);
}

}
function buymore(x){
    TotalApple++
    buyApple(x-10)
}
buyApple(money)