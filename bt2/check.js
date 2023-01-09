function check(a, b){
    let result;
    if((Math.min(...a)> Math.min(...b)) && (Math.max(...a) < Math.max(...b))){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}
    
    console.log("[1, 2, 3, 4], [0, 10] -> ", check([1, 2, 3, 4], [0, 10]));
    console.log("[3, 1], [6, 0] ->", check([3, 1], [6, 0]));
    console.log("[1, 2, 3], [2, 3] ->", check([1, 2, 3], [2, 3]));
    