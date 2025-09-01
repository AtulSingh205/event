// // 
// const a = 10;
// console.log(a)

// const b = 20;
// console.log(b);

// setTimeout((()=>{
//  console.log("hello")
// }),10000)

// const c=40;
// console.log(c)

// let obj={
//     a:12,
//     b:function nam(){
//         let sum =90000;
//         console.log(sum)
//     }

// }
// obj.b()

// --------------- function with return ---------------
// function ram(a,b){
//     let sum = a*b;
//     console.log(sum)
// }
//  ram(2,3)
//  ram(4,3)

// 

// --------arrwfuncvowelfind---------
// const vovwel=(str)=>{
//     let count=0
//     for (const e of str) {
//         if(e=="a"||e=="e"||e=="i"||e=="o"||e=="u"){
//             count++
//         }
//     }
//        return count
// }
// let a=vovwel("AtulSingh".toLowerCase())
// console.log(a)

// -------call back function-------------

// function nam(name,calback){
//     console.log("Hello "+name)
//     calback();
// }
// function sayhelo(){
//     console.log("Good mornig")
// }
// nam("Atul",sayhelo)


// ------call back function -------

// function user(calback){
//     console.log("function user call!")
//     calback();
// }
// function second(){
//     console.log("function second call!")
// }
// user(second)


// const arrfunc=(ram)=>{
//        console.log("arrow func call!")
//        ram();
// }
// function  b(){
//     console.log("func b called!")
// }
// arrfunc(b)

// ---------practice 2-----------
// function user(callback){
//       callback();
// }

//  const greetfuc=(()=>{
//     console.log("Hey parbhu!")
// })
// user(greetfuc)
// console.log(greetfuc)

// -----------Practice3---------
// const arrfunc=(calback)=>{
//    console.log("Hey! arrfunc")
//    calback()
// }

// const secondarrofunc=(calback2)=>{
//     console.log("Hey! Hariram")
//     calback2()
// }
// const thirdarrowfuc=()=>{
//       console.log("Hey! Krishn jaganathm")
// }
// arrfunc(secondarrofunc)
// arrfunc(() => secondarrofunc(thirdarrowfuc));


// --------practice 2------

// (function user(){
//     console.log("Hey")
// })()

//---------practice4-------
// function nam(task,calback){
//     console.log("you complete your "+task)
//     calback()
// }

// nam("Work",()=>{
//       console.log("then you can go!👍")
// })

// --------pracrice5---------------
// const plus=(a,b)=>{
//     let sum= a+b
//     return sum;
// }
// const minus=(a,b)=>{
//     let sub = a-b;
//     return sub;
// }
// const into=(a,b)=>{
//     let mul = a*b;
//     return mul;
// }
// const divid=(a,b)=>{
//     let div=a/b;
//     return div;
// }

// console.log(plus(2,3))

//-------Practice6-------
// let arrfunc=(a,b,calback)=>{
//     console.log("arrofunc call!👍")
//     let sum = a+b
//      calback(sum)

// }
// let print=(result)=>{
//     console.log("print func call!🙌")
//     console.log(result)
// }
// arrfunc(2,3,print)
//-----------Practice7---------------
// const arrowfuc=(name,calback)=>{
//      console.log("Loading...")
//     setTimeout(()=>{
//         console.log("Hii! my name is ",name)
//     },4000)
//     calback()
// }
// const complete=()=>{
//     console.log("Have a nice day👍")
// }
// arrowfuc("Atul",complete)

// ---------callbackhell------------
// function nam(dataitem, calback) {
//     setTimeout(() => {
//         console.log("Data", dataitem)
//                     if (calback) {
//             calback()
//         }

//     }, 3000);


// }

// nam(1, () => {
//     nam(2, () => {
//         nam(3, () => {
//             nam(4, () => {
//                 nam(5, () => {

//                 })
//             })
//         })
//     })
// })
// -----------promise--------
// let a = new Promise((resolve,reject)=>{
//     console.log("promise!")
//     // resolve("sucscess")
//     reject("failed")
// })
// ----------promise2----------
// const func =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("Error occurd!")
//         resolve("shi hai ")
//     })
// }
// let problem = func()
// problem.then((Data)=>{
//     console.log(Data)
//     console.log(Data)
//     console.log(Data)
// })
// -------------callbackpractie1--------------
// function nam(name,calback){
//    
//     console.log("A name of use is: ",name)
//     calback(name)
// }
// arrowfunc=(a)=>{
//     console.log("A callback user ",a)
// }
// nam("Atul",arrowfunc)

// ---------calback2-------
// function sum(a,b,calback){
//     let add = a+b;
//     console.log("and the sum of number is Loding...")
//     calback(add)
// }
// arrowfunc=(add)=>{
//     console.log("result of sum is: ",add)
// }
// sum(2,3,arrowfunc)
// ----------callback3----------
// function printarry(arr,calback){
//         console.log("printarray calld!")
//         calback(arr)
// }
// arrowfuc=(a)=>{
//     console.log("arrow func called!")
//     for (const  e of a) {
//         console.log(e)
//     }
// }
// let brr=[1,2,3,4]
// printarry(brr,arrowfuc)

// ---------calback4-----------
// function printarry(arr,calback){
//         console.log("printarray calld!")
//         calback(arr)
// }
// const evenodd=(a)=>{
//     console.log("arrow func called!")
//     for (const  e of a) {
//         if(e%2==0){
//             console.log("even")
//             console.log(e)

//         }
//         else{
//             console.log("odd")
//         console.log(e)
//         }
//     }
// }
// let brr=[1,2,3,4]
// printarry(brr,evenodd)
// ----------------calback5------------
// function yogi(name,calback){
//        console.log("Nam badlana hai!")
//        calback(name)
// }
// arrowfunc=(n)=>{
//           let upper=n.toUpperCase()
//         console.log("Apka  sehr k nam badal kar "+upper+" kardiya gya ha😎")
// }
// yogi("Pt deendyal nagar",arrowfunc)

// -----------calbackpractice6-----------
// function square(num,calback){
//     console.log("HII this is square func!")
//     calback(num)
// }
// arrowfunc=(n)=>{
//     console.log("callback function called! ")
//     let a=n
//      n*=n
//     console.log("square of the number is:",n)
//     console.log("jai bajrangi🚩")
// }
// square(2,arrowfunc)

//-----------------cabackpractice 8---------------------

// ------------calbackpractice9------------
// function mutical(calback1,calback2){
//     console.log("multicall function called!")
//     calback1()
//     calback2()
// }
// let arrfunc1=(calback)=>{
//   console.log("callbacke1 clled!")
// }
// let arrfunc2=(calback)=>{
//     console.log('callback2 called!')
// }
// mutical(arrfunc1,arrfunc2)
// ----
// ---------calbackpractice10-----------
// function delay(calback){
//     console.log("time delay func called! ")
//     setTimeout(() => {
//         calback()
//     },3000);
// }
// const arrofunc=()=>{
//     console.log("callback! function called!")
// }
// delay(arrofunc)

// -----------------promise --------------
// function nam() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Data1")
//     },3000)

// })
// }

// function nam2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data2")
//         }, 3000)

//     })
// }
// console.log("Your data is loding..")
// let a = nam()
// a.then((res) => {
//         console.log(res)
//         b = nam2()
//         b.then((res) => {
//             console.log(res)
//         })
//     })

// ----------promise2---------

// arrfunc1 = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("arrfumc1")
//             resolve("this is arrfunc1!")
//         }, 3000);
//     })
// }
// arrfunc2=()=>{
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             console.log("arrofunc2!")
//             resolve("this is arrfunc2!")
//         },3000)
//     })
// }
// let a = arrfunc1()
// let b =arrfunc2()
// a.then((res) => {
//     console.log(res)
//     b.then((res) => {
//         console.log(res)
//     })
// })

// ------------------Practice3-------------------
// Promiseone = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Enter your ID")
//         setTimeout(() => {
//             resolve("Atul")
//         }, 3000)
//     })
// }
// Promisetwo = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Enter your IDpasward🔒")
//         setTimeout(() => {
//             resolve("Pasword")
//         }, 3000);

//     })
// }
// Promiseone().then((res) => {
//     console.log(res)
//      Promisetwo().then((res)=>{
//         console.log(res)
//        console.log("Pasword unlocked 🔓")
//      })
// })

// ----------------promise4-------------------
//  pehlapromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("your info is loding 🔃")
//         setTimeout(()=>{
//             resolve("{Nmae:Atul Singh age:19 From:Ballia Uttarpradesh🚩}")
//         },3000)
//     })
//  }
//  dusrapromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Hh bahi bta rh hu !")
//         setTimeout(() => {
//             resolve("Varanasi 🙌")
//         }, 3000);
//     })
//  }
//  pehlapromise().then((res)=>{
//     console.log(res)
//     console.log("Bhai but tumhara current location?")
//     dusrapromise().then((res)=>{
//         console.log(res)
//     })
//  })

// ---------------promise5--------------
// pehlapromise=()=>{
//      return new Promise((resolve)=>{
//         setTimeout(()=>[
//             resolve("hello world!")
//         ],1000)
//      }).then((res)=>{
//     console.log(res)
// })
// }
// pehlapromise()
// --------------promise6-------------

// cheaknumb=(n)=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             if(n%2==0){
//                 reslove("even")
//             }
//             else{
//                 reject("odd")
//             }
//         },3000);
//     })

// }
// cheaknumb(5).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// -------------------promise7---------------
// time = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Loding 🔃")
//         setTimeout(() => {
//             resolve("Wait done ✅")
//         }, 4000)
//     }).then((res) => {
//         console.log(res)
//     })
// }
// time()

// -------------------------promise8------------------
//     getuse = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("getuse fun ")
//             }, 3000)
//         })
//     }
//     getpost=()=>{
//         return new Promise((resolve,reject)=>{
//            setTimeout(()=>{
//             resolve("getpost is resolve!")
//            },3000)
//         })
//     }
//     getcomment=()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("getcomment func resolved!")
//             },3000)
//         })
//     }
// Promise.all([getuse(),getpost(),getcomment()]).then((res)=>{
//     console.log("All function are resolved!")
//     console.log(res)
// })

// ----------------------async awit---------------------
// api1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Api1 call!")
//         },3000)
//     })
// }
// api2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Api2 called!")
//         },3000)
//     })
// }
// async function call(){
//     let a= await api1()
//     console.log(a)
//     let b = await api2()
//     console.log(b)
// }
// call()
// -----------------------async await---------------
// userdata = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data mil gya 👤")
//         },3000)
//     })
// }
// userpost = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User k 10 post hain 📥")
//         },3000)
//     })
// }
// async function fetchuser() {
//     console.log("User data fetch ho rh hai 🔃")
//     let a = await userdata()
//     console.log(a)
//     let b = await userpost()
//     console.log(b)
// }
// fetchuser()

// ---------async awit----------------
// username = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Enter your user name 👤")
//         setTimeout(() => {
//             resolve("Atul")
//         }, 3000)
//     })
// }
// userpasword = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Bhai Pasword to dal 🔒")
//         setTimeout(() => {
//             resolve("User na pasword dal diya hai 🔒 ")
//         },3000)
//     })
// }
// async function fetchlogin() {
//     let a = await username()
//     console.log(a)
//     let  b = await userpasword()
//     console.log(b)
// }
// fetchlogin()

// ---------------------asyn hello1---------------
// arrowfunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello world")
//         }, 2000)

//     })
// }
// async function  printAfterdelay() {
//     console.log("Wait for one two sec")
//     let a = await arrowfunc()
//     console.log(a)
// }
// printAfterdelay()

//---------------printname2---------------
// arrowfunc = (nam) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hello ${nam}`)
//         }, 2000)

//     })
// }
// async function printname() {
//     console.log("typing....")
//     let a = await arrowfunc("Atul")
//     console.log(a)
// }
// printname()

// ----------------addtwonumb3---------------
// sum=(x,y)=>{
//     return new Promise((resolve,reject)=>{
//         let ad=x+y;
//         setTimeout(()=>{
//             resolve(`Sum of wo number is ${ad}`)
//         },2000)
//     })
// }
// async function nam(){
//     let x=10 , y=10
//     let a = await sum(x,y)
//     console.log(a)
// }
// nam();

// -----------Error handel practice ------------!! kuch result hi nhi a rh hai 
// arrowfunc = (x, y) => {
//     return new Promise((resolve, reject) => {
//         if (typeof x != "number" || typeof y != "number") {
//             console.log("Pehle dekho kr kya rhe ho tum usi hisab se number dalo 🤦")
//         }
//         else {
//             let sum = x + y;
//             setTimeout(() => {
//                 resolve(`Sum of two number is ${sum}`)
//             }, 2000)
//         }
//     })
// }
// async function trcatch() {
//     let a = 12,b ="twelve";
//     try{
//         let a =arrowfunc(a,b)
//         console.log(a)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// --------------countdown5-------------
// Count = (n) => {
//     return new Promise((resolve, reject) => {

//         for (let i = 0; i < n; i++) {
//             setTimeout(() => {
//                 console.log("come aftet one second!")

//                 // resolve(i)
//                 console.log(i)
//             }, i * 1000)
//         }
//     })
// }
// async function nam() {
//     let a = await Count(10);
//     console.log(a);
// }
// nam()

// ---------------twotask equently 6--------------
// firsttask=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("firsttask resolve!✅")
//         },2000)
//     })
// }
// secondtask=()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("secondtask resolve!✅")
//         },2000);
//     })
// }
// async function  task() {
//     let a = await firsttask()
//     console.log(a)
//     let b = await secondtask()
//     console.log(b)
// }
// task()

//--------------------runtwotasparallel 7-----------------
// firsttask=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("firsttask complete ✅")
//         },2000)
//     })
// }
// secondtask=()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("secondtask resolve!✅")
//         },2000);
//     })
// }

// async function task() {
//     let a =await firsttask()
//     let b = await secondtask()
//     console.log(a)
//     console.log(b)
// }
// task()

// -------------------chain transformation------------------
// Doubel=(n)=>{
//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             let result=n*2
//              console.log(`Doubel a number is: ${result}`)
//              resolve(result)
//           },2000)
//     })
// }
// square=(n)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let result=n*n;
//             console.log(`Square number is: ${result}`)
//         },2000)
//     })
// }
// subtract=(x,y)=>{
//     return new Promise((resolve,reject)=>{
//         // let sub = x-y;
//         setTimeout(()=>{
//               let sub = x-y;
//             console.log(`Sub number is: ${sub}`)
//             resolve(sub)
//         },2000)
//     })
// }
// async function  chain() {
//     let dbl=await Doubel(3)
//     let sqr=await square(dbl)
//     let result=await subtract(sqr,5)
//     console.log(result)
// }
// chain()

// -----------------------traficlight10----------------------
// red = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Red Light(ruk j Bhai 🫸)🔴")
//         }, 2000)
//     })
// }
// yellow = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("yellow(Bhai ready rehna hmla kbhi bhi ho skta hai 😁) 🟡")
//         }, 2000)
//     })
// }
// green=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Green (Ja bahi ji le apni jndgi) 🟢")
//         },3000)
//     })
// }
// async function traficlight() {
//      let a = await red()
//      console.log(a)
//      let b = await yellow()
//      console.log(b)
//      let c= await green()
//      console.log(c)

// }
// traficlight()
// -----------------------heigher order function-----------------
//  function nam(a,b,oprt){//heighe order function
//     return oprt(a,b);
// }
// function sum(a,b){
//     return a+b;
// }
// let a =nam(2,3,sum)
// console.log(a)
// -----------arrayofbjc---------
// let arr=[
//     {name:"Atul",age:20,locaton:"Mughalsrai",clg:"Shepa"},
//     {name:"Karan",age:20,locaton:"Mughalsrai",clg:"Shepa"},
//     {name:"patel",age:20,locaton:"Mughalsrai",clg:"Shepa"},
//     {name:"amitpal",age:20,locaton:"Mughalsrai",clg:"Shepa"}  
// ]
// console.log(arr)

// -------------------------arrayinmap----------------
// const arr=[1,2,3,4,5];
// const arr2=[];
// for(let i = 0;i<arr.length;i++){
//      arr2[i]=arr[i]+1
//     // console.log(arr[i]+1)

// }
// for(let i =0;i<arr.length;i++){
//     console.log(arr2[i])
// }
// ---------------arrmap--------------
// const arr1=[1,2,3,4,5]
// const arr2=arr1.map((item ,value)=>(
//     item+1
// ))
// console.log(arr2)

// ---------------explicit-------------
// const arr1=[1,2,3,4,5]
// const arr2=arr1.map((item ,value)=>{
//    return item+1;
// })
// console.log(arr2)

// ----------------practicemap -------------
// let arr=[1,2,3,4,5]
// let brr=arr.map((item,value)=>{
//     return item+1;
// })
// console.log(brr)

// ---------------practicewithotmap------------
// let arr=[1,2,3,4,5]
// // let arr2=[]
// for(let i =0;i<arr.length;i++){
//     arr[i]=arr[i]+1
// }
// console.log(arr)


// -----------------how work--------------
// let arr=["a","b","c","d","e"]
// let brr=arr.map((item,value)=>{
//      console.log(`item: ${item} and value:${value}`)
//      return item 
//     })
// console.log(brr)
// -------------------filter-----------
// let arr=[1,2,3,4,5]
// let brr=arr.filter((item,value)=>{
//     console.log(`item: ${item} and value: ${value}`)
//     return item%2==0;
// })
// console.log(brr)
// ----------------reduce-----------------
// let arr=[1,2,3,4,5]
// let brr=arr.reduce((acm,value)=>{
//     console.log(`acm: ${acm} and value: ${value}`)
//     // return acm+1
// },0)
// console.log(brr)
// -----------------promise---------------
// let nam = new Promise (function(reslove,reject){
//      setTimeout(() => {
//          reslove("ho gya resolve")
//      }, 3000);
// }) 
// nam.then((item)=>{
//     console.log(item)
// })

// ---------------------practice---------------
// let arr=[1,2,3,4,5]
// let newarr=arr.slice(1,4)
// console.log(newarr)

// let arr=[1,2,3,4,5]
// let newarr=arr.map((val)=>{
//     return val*val
// })
// console.log(newarr)

// key boolean 
// let obj={
//     name : "Atul",
//     20:"Age",
//     true:"location"
// }
// console.log(obj[true])

let arr=[1,2,34,5]
let store =  arr.filter((itm)=>  itm%2==0)
console.log(store)
let store1= arr.find((itm)=>itm%2==0)
console.log(store1)