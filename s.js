let arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 5;

function findSum(a, s) {

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] == s) {
        console.log([a[i], a[j]]);
      }
    }
  }
}

function findSum2(a, s) {
  a.sort();
  let newArr = new Set(a);

  for (let i = 0; i < a.length; i++) {
    let b = Math.abs(a[i] - s);
    if (b > a[i] && newArr.has(b)) {
      console.log([a[i], b])
    }
  }
}


findSum2(arr, sum)