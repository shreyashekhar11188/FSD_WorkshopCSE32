console.log("1. Synchronous code - Before callbacks");

process.nextTick(() => {
    console.log("2. process.nextTick()");
});

setTimeout(() => {
    console.log("3. setTimeout()");
}, 0);

