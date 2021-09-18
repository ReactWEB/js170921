/*Exersise__1*/

let x = 14;
let y = 45;

for (let i = 2; i <= x; i = i + 2){
  console.log(i);
}

for(let i = 33; i <= y; i = i + 2){
  console.log(i);
}

/*Exersise__2*/

let n = 9991999;

for (let i = 9991997; i <= n; i++) { 

  for (let j = 9991997; j < i; j++) { 
    if (i % j == 0) continue; 
  }

  console.log(i); 
}