let num = 20;
let fac = 0;
for(let i=2;i<=num;i++){
    if(num%i==0){
        fac++;
    }
}
if(fac==2){
    return false;
}else{
    return true;
}