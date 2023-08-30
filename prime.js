let num = 20;
let factor = 0;
for(let i=2; i<=num; i++){
  if(num%i==0){
    factor++
  }
}
if(factor==2){
  console.log(num,"is Prime")
}
else{
    console.log(num,"is not Prime")
}