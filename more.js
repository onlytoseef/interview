function a() {
  console.log("A");
}

a();
setTimeout(() => {
  console.log("B"), 0;
});

console.log("C");

Promise.resolve().then(console.log("D"));

// Here this concept is about task queue
// Javascript is synchronous it runs immediately and its call stack (which excute code) doent not wait for any asynchornous task it runs immediately
// we can also run aysnchoronous task by using call back and aysn await
// when a task is synchornous it is set in the queue list of browser (callback queue)
// then after its time completed it is moved to call stack with the help of event loop
