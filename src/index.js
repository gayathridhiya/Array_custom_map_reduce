Array.prototype.customMap = function (callback) {
  let opArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i]);
    if (result) {
      opArray.push(this[i]);
    }
  }
  return opArray;
};

const arr = [1, 2, 3, 45, 6];
console.log(arr.map((x) => x + 1));
console.log(arr.filter((x) => x % 2 == 0));
console.log(arr.customMap((x) => x % 2 == 0));

Array.prototype.customReduce = function (callback, initialValue) {
  let res = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (res) {
      res = callback(this[i], res);
    } else {
      res = this[i];
    }
  }
  return res;
};

console.log(arr.reduce((a, b) => a + b));
console.log(arr.customReduce((a, b) => a + b));

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    return innerVariable + outerVariable;
  };
}

const outerFn = outerFunction(5);

console.log(outerFn(8));

function Counter() {
  let _count = 10;
  function add(num) {
    _count += num;
  }
  function retrieve() {
    return _count;
  }
  return { add, retrieve };
}

const c = new Counter();
c.add(11);
console.log(c.retrieve());

function add80ToN(num) {
  return 80 + num;
}

function add80ToNMemoized() {
  let s = {};
  return function (num) {
    if (num in s) {
      return s[num];
    } else {
      s[num] = num + 80;
      return s[num];
    }
  };
}

console.log(add80ToN(7));
console.log(add80ToNMemoized()(9));

let name = "prop_name";

var a = {
  [name]: "gayathri"
};

console.log(a);

let resS = JSON.stringify(a);
console.log(JSON.stringify(a), JSON.parse(resS));

let ob1 = { a: 1, b: 2 };
let ob2 = { ...ob1 };
let ob3 = ob1;

ob1.a = 19;

console.log(ob1, ob2, ob3);
