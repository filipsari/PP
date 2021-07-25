/* 
1. Basic use- Using Promise
2. Use to wrapping timeout function inside a promise
3. connecting to data base using Promise*/


// function divide (a,b) {
//   return a/b;
// }

/********** BASIC USE ************ */
//this is not asynchrone case but use Promises to show how does it works. 
function divide (a,b) {
  return new Promise (function (resolve, reject){  // resolve is refernece tofunction(after than) and rejecte is for another f- "catch"
    if(b === 0){
     // reject ("You cannot divided by zero!") // equal to "error"
      // also you can have instance of Error:
      reject (new Error("You cannot divided by zero!")) 
      return // return here means tha you want to exit here if it is rejected, not cont to resolve
    }
    resolve (a/b);  //  (a/b) is (result)
  })
}

// CallingFunction().then(function(){block-code}).catch(function(){block-code})
divide(20,10).then(function (result) {
    console.log(`Divison is success : ${result}`);
}).catch(function (error){
  console.log(`There was a problem: ${error} `); //There was a problem: Error: You cannot divided by zero! 
}); 
/************************************************ */

/********** WRAPPING CALLBACK INSIDE PROMISE ************ */

function wait (miliseconds) { 

  return new Promise ( function (resolve, reject){
    if (miliseconds <= 0) {
      reject (new Error (`You can not wait for 0 or less than 0 seconds!`));
      return;
    }



  setTimeout( function(){
    resolve();
  }, miliseconds);
     //settingTimeOut (1st parameter callback, 2nd parameter)
  
  });
}

wait(1000).then(function(){
  console.log("We were waiting for 1 second!");
}).catch(function(error){
  console.log(`There was an error: ${error.message}`);
});

// CallingFunction().then(function(){block-code}).catch(function(){block-code})

/***********************/

const newPhonePromise = new Promise ( (resolve, reject) => {   
  
  setTimeout(() => {
    const GoodMarks = true;
    if(GoodMarks){
      resolve("Got a new phone");
    } else {
      reject("My marks are bed")
    }
  }, 2000);
}); 

newPhonePromise
.then(  () => console.log("hey I got it!")  )
.catch( ()  => console.log("hey I did not get it- just faild") )

/*********************************************/

const newPhonePromise = new Promise ( (resolve, reject) => {   
  
  setTimeout(() => {
    const GoodMarks = true;
    if(GoodMarks){
      resolve("Mom will buy a new phone");
    } else {
      reject("My marks are bed")
    }
  }, 2000);
}); 

newPhonePromise
.then(  (positiveValue_fromResolve) => console.log(`hey I got it!, because - ${positiveValue_fromResolve}`)  )
.catch( (reason_fromReject)  => console.log(`hey I did not get it- just faild because - ${reason_fromReject}`) )

/*******************************************************/

const newPhonePromise = new Promise ( (resolve, reject) => {   
  
  setTimeout(() => {
    const GoodMarks = true;
    if(GoodMarks){
      resolve("Mom will buy a new phone");
    } else {
      reject("My marks are bed")
    }
  }, 2000);
}); 

// const cleanRoom = new Promise ();
// const throwGarbage = Promise();
// const getIceCream = Promise();

// cleanRoom.then ( () => throwGarbage()) . then( (promise) => promise.then( () => getIceCream() )  )


newPhonePromise
.then(  (positiveValue_fromResolve) => console.log(`hey I got it!, because - ${positiveValue_fromResolve}`)  )
.then( (someValue) => console.log(`${someValue} and it costs 100 euros`))
.catch( (reason_fromReject)  => console.log(`hey I did not get it- just faild because - ${reason_fromReject}`) );


const cleanRoom = function () { 
  return new Promise (function (resolve) {
    setTimeout(() => {
      resolve("Room Cleaned!");      
    }, 5000);
  })
};


const removeGarbage = function(){
return new Promise(function (resolve){
  resolve("Garbage Removed!")
})
};

const getIceCream = function() {
  return new Promise (function (resolve){
    resolve("Have vanila IceCream");
  })
};

cleanRoom().then(function(resolve){
  return removeGarbage();
}).then(function(resolve){
  return getIceCream();
}).then(function(){
  console.log("Job done");
});
/***************************************** */







