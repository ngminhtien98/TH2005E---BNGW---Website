// console.log("Hello world")

var x = 10;
console.log(x);
console.log(x+10);
x="Hello";
console.log(x);
console.log(x+10);
console.log("xin chao"+" T2005E");
console.log(x.length);
var y="a10";
//console.log(y+10)
y=parseInt(y);
console.log(y);

if(isNaN(y)){
    console.log("No value");
} else {
    console.log(y+10);
}

for(var i=0; i<10; i++){
    console.log("i = "+i);
}

var ary=[];
ary[0] = 1999;
ary[1] = "hello";
ary[2] = [2,3,4,"hello",[1,1,1]];
console.log(ary[2][4]);
ary[2][4][3]=55;
console.log(ary[2][4]);

var s = [1,2,3,5,8,13,21];
for (var i = 0; i<s.length; i++){
    console.log(s[i]);
}

console.log(f(1,"s"));
function f(a,b) {
    console.log("This is example value inside function f() " + (a+b));
    return "hello this is return part";
}

s.map(function (e) {
    console.log("s: "+e);
})

var arr=[];
// for (var i = 0; i<10; i++){
//     arr[i] = i*2+1;
// }
for (var i = 0; i<10; i++){
    arr.push(i*2+1)
}
arr.splice(1,2)
arr.map(function (e) {
    console.log("arr: "+e);
 })