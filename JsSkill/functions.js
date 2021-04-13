function range(start,end,step = 1){
    r = [];
    for (i = start; i<=end ; i += step){
        r.push(i);

    }
    return r
}

console.log(range(1,10));
console.log(range(1,10,2));