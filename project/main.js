
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

export const caesar = function(a, b) {
    let str = a;
    let n = b;
    if (n > 26 || n < -26) {
      n = n % 26
    }
    // console.log(`n = ${n}`);
    let uni = [];
    for (let i = 0; i < str.length; i++) {
      uni[i] = str.charCodeAt(i);
    }
    for (let i = 0; i < uni.length; i++) {
    //   console.log(`1st = ${uni[i] >= 65 && uni[i] <= 90}`)
      if (uni[i] >= 65 && uni[i] <= 90) {
        // console.log(` 1stif = ${uni[i] + n < 65}`)
        // console.log(`  u[i] ${uni[i] = 90 - 1 + n}`)
        if (uni[i] + n < 65) {
          uni[i] = 91 - (65 - (uni[i] + n));
        }
        else if ((uni[i] + n) > 90) {
          uni[i] = 64 + uni[i] + n - 90;
        }
        else {
          uni[i] = uni[i] + n;
        }
        // console.log(`  u[i] ${uni[i]}`)
  
      }
  
    //   console.log(`2st = ${uni[i] >= 97 && uni[i] <= 122}`)
      if (uni[i] >= 97 && uni[i] <= 122) {
  
        if (uni[i] + n < 97) {
          uni[i] = 123 - (97 - (uni[i] + n));
        }
        else if (uni[i] + n > 122) {
          uni[i] = 96 + uni[i] + n - 122;
        }
        else {
          uni[i] = uni[i] + n;
        }
      }
  
    }
    // console.log(uni);
    let arr = [];
    for (let i = 0; i < uni.length; i++) {
      arr[i] = String.fromCharCode(uni[i]);
    }
    return arr.join("");
};