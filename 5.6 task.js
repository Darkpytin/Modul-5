const arr =[1, 1, 1, 1, 1,];
let n = true;
for ( let i=0; i < arr.length; i++){
  if(i>0){
    if(arr[i]!=arr[i-1]) {n = false}
  }
}
console.log(n);