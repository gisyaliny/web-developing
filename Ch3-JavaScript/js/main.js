// alert('Hello ' + 'world');
// console.log('hello'.length);
// console.log('hello'.charAt(0));
// console.log('hello, world'.replace('hello','goodby'));
// console.log('hello, world'.toUpperCase())

// var name = 'DasAuto';
// console.log(name);
// name = 'Simon';
// console.log(name)
// let a = 1;
// console.log(a);

// const Pi = 3.14;
// console.log(Pi);
// Pi = 3.14159;
// console.log(Pi)

// var x = 5;

// console.log(x);

// x += 5;
// console.log(x);

// x++;
// console.log(x);

// x--;
// console.log(x);

// var x;

// x = '3' + 4 + 5; // x = '3' + '4' + '5'
// console.log(x);

// x = 3 + 4 + '5'; // x = 3 + 4 then x = '7' + '5' 
// console.log(x);

// console.log(123 == '123'); // '123' '123'
// console.log(123 === '123');

// var name = 'Daniel';
// var age = 20;
// if (name == 'Simon' && age == 21) {
//     console.log('Simon');
// } else  if (name == 'John'){
//     console.log('John');
// } else {
//     console.log('Stranger!');
// }

// var b = 20;
// var i = 0;
// while ((a +i) <= b) {
//     console.log('true')
//     i++;
// }

// var a = 19;

// if (true) {
//     var b = 20;
// }

// if (true) {
//     let c = 21;
// }

// do {
//     a++;
//     console.log(a)
// } while (a<= b);

// do {
//     b++;
//     console.log(b)
// } while (b<= c);

// for(let i = 0; i<=5; i++) {
//     console.log(i)
// }
// var age = 20;
// var allowed = age >=18 ? 'Yes' :'NO';
// console.log(allowed);
// var name = 'Daniel';

// switch(name) {
//     case 'Simon':
//         console.log("It's Simon");
//         break;
//     case 'John':
//         console.log("It's John");
//         break;
//     default:
//         console.log("It's a stranger");
// }

// var obj = new Object();
// var obj2 = {};
// obj = {
//     name: 'Simon',
//     age:'20',
//     email:'simon@gmail.com',
//     contact: {
//         phone : '2134567',
//         telegram: '@Simon'
//     }
// };
// // console.log(obj.contact.phone);
// // console.log(obj['contact']['phone']);
// obj.contact.wechat = 'abcd';
// console.log(obj.contact)
// console.log(obj);

// var a = new Array();
// var b = [];
// // a[0] = 'dog';
// // a[1] = 'cat';
// // a[5] = 'tiger';
// // console.log(a);
// // console.log(a[2]);

// b = ['dog', 'cat', 'tiger'];

// // for (let i = 0; i < b.length; i++){
// //     console.log(b[i]);
// // }

// // for(let i in a){
// //     console.log(a[i]);
// // }

// b.push('sheep');
// b.unshift('lion');
// console.log(b);

function add() {
    let sum = 0;
    for(let i = 0,j = arguments.length; i<j;i++){
        sum += arguments[i]; 
    }
    return sum;
}

let sum = add(1,2,3,4,5,6,7,8,9,10);
console.log(sum);