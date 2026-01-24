//   console.log( "abijith");
//   alert("hello user"); 

// var, let and const  the keywords
//old way
// var a=10;
// console.log(a);
// console.log(a+8);

// //currect way of useing
// let b=true;          //can create same name again only on time with let keyword
// const pi=3.14;       // cant use the same variable in the same scope with const keyword

// {// this is in inside the scope 
// var a= 20; // The var is the goble scope can be accessed from any where
// let x= 50; // you cant acces the inner scope as let u cant to the outer scope
// }
// console.log(x);

// let num= 40;
// {
//     console.log(num); // here the output will come beasue we accees the outer scope to the inner scope
// }

// const q=1;
// q=2;  // not alloward - reintializtion again

//primitive
// let str="String";
// let number=1;
// ``
// let bool= true;
// let und = undefined;
// let nul = null;    //typeof the null is object 


// let greet = 'It\'s'   // output will be  It's
// let gee= "hello 's " // output will be  hello 's 
// let gre= "hello";
// console.log(gre.slice(0,2));  // output he

// let gret ="Hello";
// let name = "abijith";
// const full = gret + name;
// console.log(full);


//     Common Escape Sequences
//      \n: Inserts a newline (equivalent to pressing Enter). 
//      \t: Inserts a tab space. 
//      \\: Represents a literal backslash. 
//      \": Inserts a literal double quote. 
//      ': Inserts a literal single quote. 
//      \0: Represents the null character (U+0000), if not followed by a digit 0–7.

// const person= "Abi";
// const greeting = `Hello  ${person}`
// const multi = `mujdfdfdfd 
// dfdfdfdfdf
// dfdfdfdf`
// console.log(multi);
// console.log(typeof multi)  // of the value in the keyword like number , strings


// // non primitive
// let obj= {
//     name:"abijith",
//     email:["a@gmail.com","b@b.com"],
//     address: {city:"jalanadhr"},
// };
// console.log(obj);
// console.log(obj.name);         //read name
// obj.name = "Aditya";  
// console.log(obj.name);         //update
// console.log(obj);
// obj.moblie=988745561223;       //create
// console.log(obj);
// delete obj.moblie;             //delete
// console.log(obj);

// let arr= [1,2,"hello",true,function(){},undefined,null];

// function func(){

// }

// arr[10] =3;
// console.log(arr);
// console.log(arr[8]);
// console.log(arr[100]);

// arr.push(10);     //add in last
// arr.pop();        //remove from last
// arr.unshift();    //add at fist
// arr.shift();      //remove from last
// console.log(arr)

// arr.fill(9,0,2);
// arr.reverse();
// console.log(arr);


// test();
// test("Abi",21);
// function test(name, age){
//     if(!name || !age){
//         return;
//     }else{
//         console.log(`hello ${name}, Age:${age}`);
//     }
//  }
// test();

// // arrow fun
// () => { }

// const func1 = ()=> {}
// func1();   //only can after createion of the function


// for(let i=0;i<5;i++){
//    console.log(i); 
// }

// let q=0;
// while(q < 10){
//     console.log(q);
//     q++;
// }

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);
// }

// for(let key in students){
//     console.log(student[key])
// }


// const parent = (callBackFn) =>{
//     callBackFn();
// }
// const inner =()=>{
//     console.log("hello from inner");
// }
// parent(inner);


const ages=[10,20,30,40];
// ages.forEach( (value, index) =>{
//     console.log(value);
// })

// ages.forEach( (value, index) =>{
//     ages[index] = value *2;
// })
// console.log(ages);

const double = ages.map((value,index) =>{
        return value *2;
})
console.log(ages);




