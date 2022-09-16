const mymap = new Map();
console.log(mymap); // output == empty.
const key1 = "alkfjajf",
  key2 = { name: "anshik" },
  key3 = {};
const key4 = function () {
  console.log("akfkjafjajee");
};
// setiing value inside the map .
mymap.set(key1, "this is key1 ");
mymap.set(key2, "this is key2 ");
mymap.set(key3, "this is key3 ");
mymap.set(key4, "this is key4 ");
console.log(mymap);
const value1 = mymap.get(key1);
console.log(value1);
console.log(mymap.size);
for (let [key, value] of mymap) {
  console.log(key);
  console.log(value);
}
for (let key of mymap.keys()) {
  console.log(key);
}
for (let value of mymap.values()) {
  console.log(value);
}
mymap.forEach((value, key) => {
  console.log(key, value);
});

//converting map into array.
let arr = Array.from(mymap);
{
  console.log(arr);
}
let arrkeys = Array.from(mymap.keys());
{
  console.log(arrkeys);
}
let arrvalues = Array.from(mymap.values());
{
  console.log(arrvalues);
}

let arr1 = [1, 2, 3, 4, 5, 6];
let num = arr1.map(function (number) {
  return number * number;
}); // num is also a array .map is used to triverse through array and run a fucntion defined within it.
console.log(num.length);
console.log(num);
