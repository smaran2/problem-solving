function fact(n){
    let prod=1;
    for(i=n;i>0;i--){
        prod*=i;
    }
    return prod
}
console.log(fact(5))