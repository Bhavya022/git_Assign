
function checkprime(num){
let count=0;
for(let i=2;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==1){
return true;
}
else{
return false;
}
}
let res = checkprime(13);
if(res==true){
console.log("prime");
}
else{
console.log("not prime");
}