// const arguments = [1, 2, 3];
// const arr = () => arguments[0];
// arr(); // 1
// function foo(n) {
//   const f = () => {
//     console.log(arguments[0] === n);
//     return arguments[0] + n;
//   }; // foo's implicit arguments binding. arguments[0] is n
//   return f();
// }
// console.log(foo(3)); // 3 + 3 = 6

// const { diffIndexes } = require('./models/tourModel');

// for (let i = 1; i <= 4; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 10000);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 10000);
// }

// for (var i = 1; i <= 4; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(j);
//     }, j * 1000);
//   })(j);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// const a = [1, 2, 3];
// a[100] = 4;
// console.log(a.length);

// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }
// let diff = function (x, y) {
//   return x - y;
// };

// let v = 1;
// const f1 = function () {
//   console.log(v);
// };
// const f2 = function () {
//   v = 2;
//   f1();
// };
// f2();

// function printA() {
//   console.log(answer);
//   var answer = 1;
// }
// printA();
// printA();

// function test() {
//   var foo = 33;
//   if (foo) {
//     console.log(foo);
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// function go(n) {
//   // n here is defined!
//   console.log(n); // { a: [1, 2, 3] }
//   console.log(n.a);
//   for (let b of n.a) {
//     // ReferenceError
//     console.log(b);
//   }
// }
// go({ a: [1, 2, 3] });

// var a = 1;
// let b = 2;
// if (a === 1) {
//   var a = 11; // the scope is global
//   var b = 22; // the scope is inside the if-block
//   console.log(a); // 11
//   console.log(b); // 22
// }
// console.log(a); // 11
// console.log(b); // 2

// let arr = [1, 2, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// let animals = ['jaguar', 'eagle'];
// animals.pop();
// console.log(animals.pop()); //Prints jaguar

// var sound = 'grunt';
// var bear = { sound: 'roar' };
// function roar() {
//   console.log(this.sound);
// }
// const makeSound = roar.bind(bear);
// makeSound();

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(elements, array);
// console.info(array); // ["a", "b", 0, 1, 2]
// console.log(elements); // ["a", "b",

// let bear = {
//   sound: 'roar',
//   roar() {
//     console.log(this.sound);
//   },
// };
// bear.sound = 'grunt';
// // let bearSound = bear.roar;
// // bearSound();
// bear.roar();

// var cat = { name: 'Athena' };
// // cat.name = 'Wild';
// // cat = { name: 'Tabby' };
// function swap(feline) {
//   feline.name = 'Wild';
//   var feline = { name: 'Tabby' };
// }
// swap(cat);
// console.log(cat.name);

// var a = 45;
// function change(vari) {
//   b = 13;
//   vari = 50;
// }
// change(a);
// console.log(a);
// console.log(b);

// var cat = { name: 'Athena' };
// function swap(feline) {
//   feline.name = 'Wild';
//   feline = { name: 'Tabby' };
//   console.log(feline.name);
// }
// swap(cat);
// console.log(cat.name);

// var thing;
// let func = (str = 'no arg') => {
//   console.log(str);
// };
// func(thing);
// func(undefined);
// console.log([] == false);

// const arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// //  Prepend all items from arr2 onto arr1
// // Array.prototype.unshift.apply(arr1, arr2);
// arr1.unshift(...arr2);
// console.log(arr1); // [3, 4, 5, 0, 1, 2]

// let cat = Object.create({ type: 'lion' });
// cat.size = 'large';
// let copyCat = { ...cat };
// cat.type = 'tiger';
// console.log({ ...cat });
// console.log(copyCat.type, copyCat.size);
// console.log(copyCat);
// console.log(cat);
// for (const key in cat) {
//   if (Object.hasOwnProperty.call(cat, key)) {
//     console.log(key, cat[key]);
//   }
// }

// const obj1 = { foo: 'bar', x: 42, y: [1, 1, 2, 2] };
// const obj2 = { foo: 'baz', y: 13 };

// const clonedObj = { ...obj1 };
// // { foo: "bar", x: 42 }

// const mergedObj = { ...obj1, ...obj2 };
// obj1.foo = 'What is the name of the';
// obj1.y[4] = 3;
// // { foo: "baz", x: 42, y: 13 }
// console.log(obj1);
// console.log(clonedObj);
// console.log(mergedObj);

// const person = {
//   isHuman: false,
// printIntroduction: function () {
//   console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// },
// };
// const me = Object.create(person);
// // me.printIntroduction();
// // expected output: "My name is Matthew. Am I human? true"
// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// const he = { ...me };
// me.isHuman = true; // inherited properties can be overwritten
// console.log(he);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 10000);
// }

// for (var j = 1; j <= 4; j++) {
//   setTimeout(function () {
//     console.log(j);
//   }, j * 1000);
// }

// function logThis() {
//   this.desc = 'logger';
//   console.log(this);
// }
// new logThis();

// console.log(0 && hi);

// const catchAsync = (fn) => (req, res, next) => {
//   fn(req, res, next).catch(next);
// };

// exports.createTour = catchAsync(async (req, res) => {
//   const newTour = await Tour.create(req.body);
//   res.status(201).json({
//     status: 'success',
//     data: { tour: newTour },
//   } );

CastError: Cast to ObjectId failed for value "wwwwww" (type string) at path "_id" for model "Tour"
    at model.Query.exec (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4498:21)
    at Query.then (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4592:15)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  messageFormat: undefined,
  stringValue: '"wwwwww"',
  kind: 'ObjectId',
  value: 'wwwwww',
  path: '_id',
  reason: Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters
      at new ObjectID (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/bson/lib/bson/objectid.js:59:11)
      at castObjectId (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/cast/objectid.js:25:12)
      at ObjectId.cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schema/objectid.js:246:12)
      at SchemaType.applySetters (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1123:12)
      at SchemaType._castForQuery (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1601:15)
      at SchemaType.castForQuery (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1591:15)
      at SchemaType.castForQueryWrapper (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1568:20)
      at cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/cast.js:332:32)
      at Query.cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4937:12)
      at Query._castConditions (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:1975:10)
      at model.Query.<anonymous> (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:2232:8)
      at model.Query._wrappedThunk [as _findOne] (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/helpers/query/wrapThunk.js:16:8)
      at /Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:279:20
      at _next (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:103:16)
      at /Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:508:38
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11),
  valueType: 'string',
  statusCode: 500,
  status: 'error'
}

CastError: Cast to ObjectId failed for value "wwwwww" (type string) at path "_id" for model "Tour"
    at model.Query.exec (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4498:21)
    at Query.then (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4592:15)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  messageFormat: undefined,
  stringValue: '"wwwwww"',
  kind: 'ObjectId',
  value: 'wwwwww',
  path: '_id',
  reason: Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters
      at new ObjectID (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/bson/lib/bson/objectid.js:59:11)
      at castObjectId (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/cast/objectid.js:25:12)
      at ObjectId.cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schema/objectid.js:246:12)
      at SchemaType.applySetters (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1123:12)
      at SchemaType._castForQuery (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1601:15)
      at SchemaType.castForQuery (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1591:15)
      at SchemaType.castForQueryWrapper (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/schematype.js:1568:20)
      at cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/cast.js:332:32)
      at Query.cast (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:4937:12)
      at Query._castConditions (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:1975:10)
      at model.Query.<anonymous> (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/query.js:2232:8)
      at model.Query._wrappedThunk [as _findOne] (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/mongoose/lib/helpers/query/wrapThunk.js:16:8)
      at /Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:279:20
      at _next (/Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:103:16)
      at /Users/changli/Desktop/NodeJs/4-natours/starter/node_modules/kareem/index.js:508:38
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11),
  valueType: 'string',
  statusCode: 500,
  status: 'error'
}
