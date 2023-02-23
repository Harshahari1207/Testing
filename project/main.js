
export function capitalize(str){
    let arr = str.split(" ");

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr.join(" ");
}

export function reverseStr(str){
    let res = '';
    for(let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res;
}

export const calculator = {
    add(...numbers){
        return numbers.reduce((sum, item) => sum+item, 0);
    },
    sub(a, b){
        return a-b;
    },
    multiply(a, b){
        return a*b;
    },
    div(a, b){
        return a/b;
    }
}