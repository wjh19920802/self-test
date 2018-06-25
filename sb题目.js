/*var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if(aﾠ==1 && a==2 &&ﾠa==3) {
    console.log("Why hello there!")
    console.log(a==1&&a==2&&a==3)
}*/

/*import {x} from './mokuai'

const a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}

/!*if(a == 1 && a == 2 && a == 3) {
    console.log('Hello World!');
}*!/

console.log(a.toString())

console.log(x);*/

// var o={
//     fn:function (){
//         // console.log(fn);
//         console.log(this);
//     }
// };
// o.fn();
/*function f() {
   var  o = {
        fn:function (){
            console.log(fn);
            // console.log(this);
        }
    }
    o.fn();
}
f();*/
/*var obj = {
    name: " jsCoder",
    skill: ["css3","html5", "es6", "react", "angular"],
    say: function () {
        for(let i = 0, len = this.skill.length; i< len; i++){
            setTimeout(function(){
                console.log("No." + i + this.name);
                console.log(this.skill[i]);
                console.log('--------------------------');
            },100);
        }
    }
}
obj.say.call(obj);*/

/*var value=33;

function Foo() {
    this.value = 42;
    setTimeout(function(){alert(this);alert(this.value)}, 500);  // 先后输出 window   33  这里是第二个this
}
new Foo();*/

/*
var value=33;
function Foo1() {
    this.value = 42;
    setTimeout(()=>{alert(this);alert(this.value)}, 500);  // 先后输出 window   33  这里是第二个this
}
new Foo1();*/
/*
var arr = [[1,2,2],[3, 4, 5, 5],[6, 7, 8, 9,[11,12,[12,13,[14]]]],10];

var res=[];
function () {
    arr.forEach((item,index)=>{
        if(typeof item == 'array') {

        }else {
            res.push(item)
        }
    })
}*/
